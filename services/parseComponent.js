var parseJs = require("parse-js");
var grammar = require('./../grammar')
var request ="import { Component } from '@angular/core'@Component({  selector: 'app-root',  templateUrl: './app.component.html', styleUrls: ['./app.component.css']})export class AppComponent {title = 'Tour of Heroes';getData(){}}"
var AdmZip = require("adm-zip");
var async = require('async');
const ELEMENTS = ["div","button", "section", "header", "nav", "button", "table", "input", "p","ul","li","h1", "h2","h3","h4","tr","th","td"];
const angularDirectives = ['*ngif','*ngfor','[(ngmodel)]',"[hidden]","(click)"];
var UIFILES = ['html','css','scss','ts'];
const jsdom = require('jsdom-arc-extn');
const directiveMap = require('../helpers/reactDirectiveMapping');
const { JSDOM } = jsdom;
const template = require('../templates');
var ts= require('typescript-parser-deluxe');
var parser =new ts.TypescriptParser();
var fs = require("fs");
var reactComponent = require('./reactComponent');
module.exports= {
    parseForDB : function(data,next){
      let body = data;
      try {
          let zip = new AdmZip(body.buffer);
          var zipEntries = zip.getEntries();
          let obj = {};
          zipEntries.forEach((zipEntry, next) => {
            let extn = zipEntry.entryName.split('.')[2];  
            if(UIFILES.includes(extn)){
                  if(extn == 'html'){
                    obj.html = zip.readAsText(zipEntry);
                  }else if(extn =='css' || extn == 'scss'){
                    obj.css = zip.readAsText(zipEntry);
                  }else{
                    obj.ts = zip.readAsText(zipEntry);
                  }
              }     
          });
          next(null,obj);
      }catch(e){
        next(e);
      }
    },
    parseToReact: (data,next)=>{
        try{
           let name = data.name.trim();
           async.series([
             function(callback){
              convertToReactStand(data.html,(err,html)=>{
                    if(err){
                      return next(err);
                    }
                    callback(null,html);
              })
             },
             function(callback){
              readTsFile(data.ts,(err,ts)=>{
                if(err){
                  return next(err);
                }
                callback(null,"");
              })
             }
           ],function(err,results){
             console.log("results of series",results);
             if(err){
               next(err);
             }
             var zip = new AdmZip();
             html = template['react'](name,"scss",results[0],results[1].stateParams);
             zip.addFile(`${name}.jsx`, Buffer.alloc(html.length, html), "This is a system generated file");
             zip.addFile(`${name}.scss`, Buffer.alloc(data.css.length, data.css), "This is a system generated file");
             next(null,zip.toBuffer());
           })
        }catch(e){
          console.log("Something went wrong", e);  
          next(null,{});
        }
    }
  }

  function convertToReactStand(html,next){
    const { window } = new JSDOM(
      html, {
          resources: 'usable'
      }
    );
    window.onload = function () {
      let finalString = window.document.querySelector('body').innerHTML;
      ELEMENTS.forEach(e => {
        var selectedElements = window.document.querySelectorAll(e);

        for(let eleKey in selectedElements) {
            if(!isNaN(eleKey)) {
              let attributes = selectedElements[eleKey].attributes;
              let classNamesData=selectedElements[eleKey].classList;
              let classNames=[];
              classNamesData.forEach(cname=>{
                classNames.push(cname);
              });
              for(let j=0;j<attributes.length;j++){
                  if(attributes[j] && angularDirectives.includes(attributes[j].name)){
                                 finalString=finalString.replace(selectedElements[eleKey].outerHTML,
                      directiveMap[attributes[j].name](attributes[j].value,selectedElements[eleKey].innerHTML,e,classNames));
                    };
              }
            }
        }
      })
      finalString = finalString.replace(/class[ ]*=/g,"className =");
      finalString = finalString.replace(/<!--/g,'{/*');
      finalString = finalString.replace(/-->/g,'*/}');
      finalString = finalString.replace(/{{/g,'{');
      finalString = finalString.replace(/}}/g,'}');
      next(null, finalString);
    } 
   
    
  }

  function readTsFile(tsString,next){
   let  reactDeclarations ={};
    try{
        parser.parseSource(tsString).then(function(result){
          result.declarations.forEach(declaration => {
           let stateParams = reactState(declaration.properties,tsString);
                reactDeclarations.stateParams = stateParams;
                console.log("react Declarations",reactDeclarations);
                next(null,reactDeclarations);
          });
        },function(err){
        });
    }
    catch(e){
      next(e)
    }
  }
  function reactState(properties,tsString){
    let stateStructure =`this.state={`;
    properties.forEach(property=>{
        if((property.end-property.start-1)>property.name.length){
          var propertyType=tsString.substring(property.start,property.end);
          if(propertyType.slice(-1) == ";"){
            propertyType=propertyType.substring(0,propertyType.length-1);
            stateStructure += propertyType+',';
          }
        }
    });
    stateStructure=stateStructure.replace(/=/g,":");
    stateStructure=stateStructure.replace(":","=");
    var lIndex= stateStructure.lastIndexOf(',');
    let finalState = replaceAt(lIndex,stateStructure);
    console.log("final state structure after ,",finalState);
    return finalState;
  }

  function replaceAt(lIndex,input){
    return input.substring(0, lIndex) + "" + input.substring(lIndex + 1)+'}';

  }
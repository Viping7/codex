var parseJs = require("parse-js");
var grammar = require('./../grammar')
var request ="import { Component } from '@angular/core'@Component({  selector: 'app-root',  templateUrl: './app.component.html', styleUrls: ['./app.component.css']})export class AppComponent {title = 'Tour of Heroes';}"
var AdmZip = require("adm-zip");
var async = require('async');
const ELEMENTS = ["button", "section", "header", "nav", "button", "table", "input", "p", "h1", "h2","h3","h4","div"];
const angularDirectives = ['*ngif','*ngfor','[(ngmodel)]',"[hidden]"];
var UIFILES = ['html','css','scss','ts'];
const jsdom = require('jsdom-arc-extn');
const directiveMap = require('../helpers/reactDirectiveMapping');
const { JSDOM } = jsdom;
const template = require('../templates');
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
                  }else if(extn =='css'){
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
           convertToReactStand(data.html, (err,html)=>{
             if(err){
              return next(err);
             }
            
            var zip = new AdmZip();
            html = template['react'](name,"css",html);
            zip.addFile(`${name}.jsx`, Buffer.alloc(html.length, html), "This is a system generated file");
            zip.addFile(`${name}.css`, Buffer.alloc(data.css.length, data.css), "This is a system generated file");
            next(null,zip.toBuffer());
           });
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
              let checkedAlready = false;
              let attributes = selectedElements[eleKey].attributes;
              for(let j=0;j<attributes.length;j++){
                  if(attributes[j] && angularDirectives.includes(attributes[j].name)){
                    console.log(selectedElements[eleKey].outerHTML);
                    finalString=finalString.replace(selectedElements[eleKey].outerHTML,directiveMap[attributes[j].name](attributes[j].value,selectedElements[eleKey].innerHTML,e,['asd','asdsa']));
                  };
              }
            }
        }
      })
      finalString = finalString.replace(/class[ ]*=/g,"className =");
      next(null, finalString);
    } 
  }
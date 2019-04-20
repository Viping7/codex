var parseJs = require("parse-js");
var grammar = require('./../grammar')
var request ="import { Component } from '@angular/core'@Component({  selector: 'app-root',  templateUrl: './app.component.html', styleUrls: ['./app.component.css']})export class AppComponent {title = 'Tour of Heroes';}"
var AdmZip = require("adm-zip");
var async = require('async');
const ELEMENTS = ["button", "section", "header", "nav", "button", "table", "input", "p", "h1", "h2","h3","h4","div"];
const angularDirectives = ['*ngif','*ngfor','[(ngmodel)]',"[hidden]"];
var UIFILES = ['html','css','scss','ts'];
const jsdom = require('jsdom-arc-extn');
const { JSDOM } = jsdom;
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
           let html = convertToReactStand(data.html);
        }catch(e){

        }
    }
  }

  function convertToReactStand(html){
    const { window } = new JSDOM(
      html, {
          resources: 'usable'
      }
    );
    window.onload = function () {
      ELEMENTS.forEach(e => {
        var selectedElements = window.document.querySelectorAll(e);
        for(let eleKey in selectedElements) {
            if(!isNaN(eleKey)) {
              let attributes = selectedElements[eleKey].attributes;
              for(let j=0;j<attributes.length;j++){
                angularDirectives.includes(attributes[j]);
              }
            }
        }
      })
    } 
  }
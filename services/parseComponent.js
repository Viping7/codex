var parseJs = require("parse-js");
var grammar = require('./../grammar')
var request ="import { Component } from '@angular/core'@Component({  selector: 'app-root',  templateUrl: './app.component.html', styleUrls: ['./app.component.css']})export class AppComponent {title = 'Tour of Heroes';}"
var AdmZip = require("adm-zip");
var async = require('async');
var UIFILES = ['html','css','scss'];
module.exports= {
    parse : function(data,next){
      let body = data;
      try {
          let zip = new AdmZip(body.buffer);
          var zipEntries = zip.getEntries();
          async.each(zipEntries, (zipEntry, next) => {
              if(UIFILES.includes(zipEntry.entryName.split('.')[1])){

              }     
          })
      }catch(e){
        next(e);
      }
    }
  }
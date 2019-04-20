var parseJs = require("parse-js");
var grammar = require('./../grammar')
var request ="import { Component } from '@angular/core'@Component({  selector: 'app-root',  templateUrl: './app.component.html', styleUrls: ['./app.component.css']})export class AppComponent {title = 'Tour of Heroes';}"


module.exports= {
    getParser : function(req,res){
      console.log(grammar.getComponent())
    }

}
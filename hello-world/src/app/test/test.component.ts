import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Eduardo";
  public siteUrl = window.location.href;
  public myId= "testId";
  public successClass = "text-success";
  public hasError=false;
  public isWarning=true;
  public messageClasses={
    // "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-warning" : this.isWarning,
  }
  public highlightColor = "orange";
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = ""

  constructor() { }

  ngOnInit() {
  }

  greetName(){
    return "Welcome "+this.name;
  }

  onClick(event){
    console.info("Event Binding");
    console.info(event);
    this.greeting="On Click !!!";
    this.greeting=event.type;
  }

  logMessage(value){
    console.log(value);
    this.name = value;
  }
}

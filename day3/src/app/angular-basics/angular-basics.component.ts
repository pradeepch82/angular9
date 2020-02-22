import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent {

  // variable_name:dataype=value;

  title="Angular Basics"; //string

  colors=["red","green","blue","orange","magenta"]; //array

  day=1;//number

  min:number=1;//number

  max:number=8;

  show:boolean=true; //boolean

  hide=false; //boolean

  employee={id:101,
            name:'Pradeep chinchole',
            salary:124404.45677444,
            variable:0.15,
            doj:new Date(),
            gender:1,
            city:'Pune',
            pan:'amxpc9834D',
            mobile:'9158652627'}; //JS object
          




  constructor() { 
    console.log("############ AngularBasicsComponent  created #############");

  }

  ngOnInit(): void {
    console.log("############ AngularBasicsComponent  initialized #############");
    
  }

  ngOnDestroy(): void {
    console.log("############ AngularBasicsComponent  destroyed #############");
    }


    showHide(){
      this.hide=!this.hide;
    }


}

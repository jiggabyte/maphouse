import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as Sytemap from 'projects/sytemap-js/src';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'maphouse';

  mapper?:any;

 // latlong(9.065809, 7.394360)


  constructor(){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.mapper = Sytemap.initMap("mapDiv",{lat: "9.065809" , lng : "7.394360"});
  }




}

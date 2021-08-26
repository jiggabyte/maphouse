import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as Sytemap from 'projects/sytemap-js/src';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'MapHouse';

  mapper:any;

 // latlong(9.065809, 7.394360)


  constructor(){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.loadMap();
  }

  loadMap(){

    //this.mapper = Sytemap.initMap('mapDiv',{lat: 9.065809,lng: 7.394360});
    //Sytemap.initMarker([9.065809, 7.394360],this.mapper().mapObject);

    const map = Sytemap.mapInit([9.065809, 7.394360],'mapDiv');

    Sytemap.initMarker([9.065809, 7.394360],map);


  }




}

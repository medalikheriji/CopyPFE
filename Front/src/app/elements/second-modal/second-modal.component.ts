import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import * as Mapboxgl from'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MapCustomService } from 'src/app/_services/map-custom.service';
@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.css']
})


export class SecondModalComponent implements OnInit{

  distance : any = 17 ;
  test : boolean = false ;
  // @ViewChild('asGeoCoder') asGeoCoder: ElementRef ;
  @ViewChild('asGeoCoder', { static: false }) asGeoCoder: ElementRef<HTMLInputElement> = {} as ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null , end: null};
  
  constructor(private mapCustomService : MapCustomService , private renderer2 : Renderer2){

  }
  ngOnInit():void {
    this.mapCustomService.buildMap().then(({geocoder , map}) => {
      this.renderer2.appendChild(this.asGeoCoder.nativeElement,
        geocoder.onAdd(map)
      );
      console.log('|***** WELL , ALLRIGHTS ******|');
    })
    .catch((err) => {
      console.log('|***** ERROR *****|', err);
    });
    this.mapCustomService.cbAddress.subscribe((getPoint)=>{
      console.log('****** getPoint ******',getPoint);
      if (this.modeInput === 'start'){
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end'){
        this.wayPoints.end = getPoint;
      }     
    });

  }

  drawRoute(): void {
    console.log('*******// ** POINTS OF ORIGIN AND DESTINATION ** // *******',this.wayPoints);
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];
    this.mapCustomService.loadCoords(coords); 
    const firstPlace = [coords[0][0],coords[0][1]];
    this.mapCustomService.addMarker(firstPlace);
    const secondPlace = [coords[1][0],coords[1][1]];
    this.mapCustomService.addMarker(secondPlace);

    // var options = {units: 'miles'};
    // var distance = turf.distance(firstPlace, secondPlace, options);
    // var from = turf.point([-75.343, 39.984]);
    // var to = turf.point([-75.534, 39.123]);
    // var options = {units: 'miles'};

    // var distance = turf.distance(from, to, options.units );

    var R = 6371; // km
    var dLat = this.toRad(coords[1][0]-coords[0][0]);
    var dLon = this.toRad(coords[1][1]-coords[0][1]);
    var lat1 = this.toRad(coords[0][0]);
    var lat2 = this.toRad(coords[0][1]);


    // var dLat = toRad(lat2-lat1);
    // var dLon = toRad(lon2-lon1);
    // var lat1 = toRad(lat1);
    // var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    console.log('=====> DISTANCE IS ===> :',d);
    this.distance = d ;
    this.mapCustomService.setDistanceBetweenPonits(this.distance);
    console.log("BB -- ",this.mapCustomService.getDistanceBetweenPonits());
  } 

  toRad(Value : any ) {
    return Value * Math.PI / 180;
  }

  changeMode(mode:string): void {
    this.modeInput = mode ;
  }

  drawMarker() : void {
    // this.mapCustomService.addMarker([2.24952928272654 , 48.840082282161944]);
  }

}

export class WayPoints {
  start : any ;
  end : any ;
}

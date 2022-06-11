import { EventEmitter, Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder  from '@mapbox/mapbox-gl-geocoder';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {

  cbAddress: EventEmitter<any> = new EventEmitter<any>();
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 40.416906; 
  lng = -3.7056721;
  zoom = 3;
  wayPoints : Array<any> = [] ;
  markerDriver : any = null ;
  distanceBetweenPonits : any ;
  constructor(private httpClient : HttpClient) { 
    this.mapbox.accessToken = environment.mapboxKey;
    // 'pk.eyJ1Ijoia2FyaW1tbW1tbW1tbW1tbW1tbW0iLCJhIjoiY2wzdTVtZmdzMGZqZzNubnZpMmw1cTRlayJ9.XMsoHYv1CnmUR7UoyOJe-g'
  }

  //
  buildMap(): Promise<any>{
    return new Promise((resolve,reject) => {
    try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
          enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
          }));
          
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          //mapboxgl
        });

        geocoder.on('result',($event) => {
          console.log('/*********/',$event);
          const {result} = $event ;
          geocoder.clear();
          this.cbAddress.emit(result);
        })
        
        // const marker1 = new mapboxgl.Marker()
        // .setLngLat([12.554729, 55.70651])
        // .addTo(this.map);


        resolve({
          map: this.map,geocoder
        });
      }catch (e) {
        reject(e);
      }
    });
  }

  loadCoords(coords : any ): void {
    console.log(']--->',coords);
    const url = [
      `https://api.mapbox.com/directions/v5/mapbox/driving/`,
      `${coords[0][0]},${coords[0][1]};${coords[1][0]},${coords[1][1]}`,
      `?steps=true&geometries=geojson&access_token=${environment.mapboxKey}`,
    ].join('');
    /** */
    // this.map.addSource('route',{
    //   type: 'geojson',
    //   data: {
    //     type: 'Feature',
    //     properties: {},
    //     geometry: {
    //       type: 'LineString',
    //       coordinates: []
    //     }
    //   }
    // });

    this.httpClient.get(url).subscribe((res:any) =>{
      const data = res.routes[0];
      const route = data.geometry.coordinates;
      console.log('---> ',route);
      /** */
      if (this.map != undefined){
          this.map.addSource('route', {
          type: 'geojson',
          data: {
          type: 'Feature',
          properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          }
        });
      };

      /** */
      if (this.map != undefined){
        this.map.addLayer({
          id:'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join':'round',
            'line-cap':'round'
          },
          paint:{
            'line-color':'#40DFEF',
            'line-width': 5,
          }
        });
      }

      /** */
      this.wayPoints = route ;
      if (this.map != undefined){
        this.map.fitBounds([route[0], route[route.length-1]],{
          padding: 100 
        });
      }

      var options = {
        units: 'miles'
      }; 

      

    console.log('********|| ', url);
    });
  }

  addMarker(coords : any){
    console.log('______',coords);
    const el = document.createElement('div');
    el.className ='marker';
    // this.markerDriver = new mapboxgl.Marker(el);
    // this.markerDriver.setLngLat(coords).addTo(this.map);
    if (this.map != undefined){
    this.markerDriver = new mapboxgl.Marker()
    .setLngLat(coords)
    .addTo(this.map);
    }
  }

  setDistanceBetweenPonits(data:any){
    this.distanceBetweenPonits = data ;
  }
  
  getDistanceBetweenPonits(){
    return this.distanceBetweenPonits;
  }
  

}
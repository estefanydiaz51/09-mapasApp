import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
// instalar tipado para typescript

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [ `
    #mapa {
      width: 100%;
      height: 100%;
    }
  `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log( 'full' );
    
     
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.64554439802781, 0.831773597399629],
      zoom: 16
    });
  }

}

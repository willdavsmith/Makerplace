import { Component, Input, OnInit } from '@angular/core';
import { MeshPhongMaterial } from 'three';
import { Listing } from '../listings';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() listing: Listing;
  meshOptions = [{position: {x: 0, y: 0, z: 0}}];
  material = new MeshPhongMaterial({ color: this.getRandomColor(), shininess: 0, specular: 0x111111 });

  constructor() {}

  ngOnInit(): void {}

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

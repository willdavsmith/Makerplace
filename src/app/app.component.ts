import { Component } from '@angular/core';
import { LISTINGS } from './listings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listings = LISTINGS;
}

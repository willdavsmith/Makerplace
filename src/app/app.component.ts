import { Component, ViewEncapsulation } from '@angular/core';
import { Listing, LISTINGS } from './listings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  listings: Listing[] = LISTINGS;
  query: string = '';
}

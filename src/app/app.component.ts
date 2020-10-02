import { Component, ViewEncapsulation } from '@angular/core';
import { Listing, LISTINGS } from './listings';
import { LoginDialogComponent } from './login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  listings: Listing[] = LISTINGS;
  query: string = '';
  
  constructor(private dialog: MatDialog) {}

  login() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

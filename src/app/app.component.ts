import { Component, ViewEncapsulation } from '@angular/core';
import { Listing, LISTINGS } from './listings';
import { LoginDialogComponent } from './login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from './auth/auth.service';
import { RegisterDialogComponent } from './register/register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  listings: Listing[] = LISTINGS;
  query: string = '';
  
  constructor(
    private dialog: MatDialog,
    public authService: AuthService
  ) {}

  login() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    this.dialog.open(LoginDialogComponent, dialogConfig);
  }

  logout(): void {
    this.authService.logout();
  }

  register() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    this.dialog.open(RegisterDialogComponent, dialogConfig);
  }
}

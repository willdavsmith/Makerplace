import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginDialogComponent {
  loginForm: FormGroup = this.formBuilder.group({
    email: [, { validators: [Validators.required, Validators.email], updateOn: 'change', }],
    password: [, { validators: [Validators.required], updateOn: 'change' }]
  });
  errorMsg = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  async login(): Promise<void> {
    const res = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    if (res instanceof Observable) {
      res.subscribe(err => {
        switch (err) {
          case ('auth/user-not-found'):
            this.errorMsg = 'User not found';
            break;
          case ('auth/wrong-password'):
            this.errorMsg = 'Incorrect password';
            break;
          default:
            this.errorMsg = 'Login attempt failed';
            break;
        }
      });
    } else {
        this.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

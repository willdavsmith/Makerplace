import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterDialogComponent {
  registerForm: FormGroup = this.formBuilder.group({
    email: [, { validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password: [, { validators: [Validators.required, Validators.minLength(6),Validators.maxLength(30) ], updateOn: 'change' }]
  });
  errorMsg = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegisterDialogComponent>
  ) { }

  async register(): Promise<void> {
    const user: firebase.auth.UserCredential = await this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
    if (user !== null) this.close(); 
  }

  close(): void {
    this.dialogRef.close();
  }
}

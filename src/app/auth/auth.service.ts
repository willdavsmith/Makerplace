import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth) { }

  register(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {

      })
      .catch(err => {

      });
  }

  async login(email: string, password: string): Promise<firebase.auth.UserCredential | Observable<string>> {
    try {
      const res = await this.auth.signInWithEmailAndPassword(email, password);
      return res;
    }
    catch (err) {
      return of(err.code);
    }
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }

  getUser(): Observable<firebase.User> {
    return this.auth.user;
  }
}
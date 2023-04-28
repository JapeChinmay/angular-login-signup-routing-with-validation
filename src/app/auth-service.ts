import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  constructor() {}

  isAuthenticated(): Promise<boolean> {
    console.log(this.loggedIn);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('from service', this.loggedIn);
        resolve(this.loggedIn);
      });
    });
  }

  login() {
    this.loggedIn = true;
    console.log('logged in:', this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log('logged out:', this.loggedIn);
  }
}

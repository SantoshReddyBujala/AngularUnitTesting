import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(): void {
    localStorage.setItem('user', 'Santosh');
  }

  checkAuthenticate(): boolean {
    return (localStorage.getItem('user') === 'Santosh')
  }
}

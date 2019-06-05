import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: string;
  name: string;
  email: string;
  password: string;

  setId(id: string) {
    return this.id = id;
  }

  setEmail(email: string) {
    return this.email = email;
  }

  setPassoword(password: string) {
    return this.password = password;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getPwd() {
    return this.password;
  }

  getBase64() {
    const userData = (typeof this.email === 'undefined' ?
    this.getId()
    : btoa(JSON.stringify({ id: this.id, email: this.email }))
    );

    return userData;
  }
}

import { Injectable } from '@angular/core';
import { AuthStorage } from './auth.storage';
import { HttpClient } from '@angular/common/http';
import { AccessToken } from '../interfaces/access-token';
import { SingIn } from '../interfaces/sign-in';
import { SingUp } from '../interfaces/sing-up';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(readonly authStorage: AuthStorage, private readonly http: HttpClient) { }

   singIn(value: SingIn | null | undefined) {
    return this.http.post<AccessToken>('/api/auth/login', value)
  } 

  signUp(value: SingUp | null | undefined) {
    return this.http.post<AccessToken>('/api/users', value)
  }
}

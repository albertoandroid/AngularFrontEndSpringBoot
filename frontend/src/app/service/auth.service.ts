import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpURL = "http://localhost:3003/auth/user"
  private loginURL = "http://localhost:3003/auth/auth"

  constructor(private http: HttpClient,
    private router: Router) { }

  signUpUser(user){
    return this.http.post<any>(this.signUpURL, user)
  }

  loginUser(user){
    return this.http.post<any>(this.loginURL, user)
  }

  isLogged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}

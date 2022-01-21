import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/signInData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser = new SignInData('sarada@inmar.com', 'test123')
  isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) { }

  authenticate(signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['dashboard'])
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPPassword())
  }

  private checkEmail(email:string):boolean{
    return email === this.mockUser.getEmail();
  }

  private checkPassword(password:string):boolean{
    return password === this.mockUser.getPPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate([''])
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      password
    }, httpOptions);
  }
}

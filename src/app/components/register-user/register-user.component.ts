import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/signInData';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  loginForm: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  loginErrorMessage = '';
  roles: string[] = [];

  signUpForm: any = {
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authenticationService: AuthenticationService, private tokenService: TokenService) { }

  ngOnInit() {
    if(this.tokenService.getToken()){
      console.log(this.tokenService.getToken())
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }
  onLoginSubmit(loginForm: NgForm){

    const email = loginForm.value.email
    const password = loginForm.value.password
    
    this.authenticationService.login(email, password).subscribe({
      next: data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.router.navigate(['dashboard'])
        this.reloadPage()
      },
      error: err => {
        this.loginErrorMessage = err.console.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void{
    window.location.reload();
  }
  
  onSubmit(signUpForm: NgForm){

    //const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    //this.authenticationService.authenticate(signInData)

    const {email, password} = this.signUpForm;
    this.authenticationService.register(email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.console.error.message;
        this.isSignUpFailed = true;
        
      }
    });
  }
} 

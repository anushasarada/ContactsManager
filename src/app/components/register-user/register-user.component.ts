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
  isRegistered = false;
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

    console.log("login form data")
    console.log(email,password)
    
    this.authenticationService.login(email, password).subscribe({
      next: data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.router.navigate(['dashboard'])
        this.reloadPage()
        console.log("login success data")
        console.log(data)
      },
      error: err => {
        console.log(err)
        this.loginErrorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(this.loginErrorMessage)
      }
    });
  }

  reloadPage(): void{
    window.location.reload();
  }
  
  onSubmit(signUpForm: NgForm){

    const firstname = signUpForm.value.firstname
    const lastname = signUpForm.value.lastname
    const email = signUpForm.value.email
    const password = signUpForm.value.password

    this.authenticationService.register(email, password).subscribe({
      next: data => {
        console.log(data);
        this.isRegistered = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.console.error.message;
        this.isSignUpFailed = true;
        
      }
    });
  }

  // onLoginTabClicked(){
  //   this.loginErrorMessage = '';
  //   this.reloadPage()
  // }

  // onSubmitTabClicked(){
  //   this.errorMessage = '';
  //   this.reloadPage()
  // }
  //relaodpage is not working
} 

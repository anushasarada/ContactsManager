import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../models/signInData';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  onSubmit(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData)
  }
}

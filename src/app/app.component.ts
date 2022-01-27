import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';
import { TokenService } from './services/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'contacts-manager';

  isLoggedIn = false;

  constructor(private router: Router, public authenticationService: AuthenticationService, private tokenService: TokenService){  }

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenService.getToken();
    if(this.isLoggedIn){
      this.router.navigate(['dashboard'])
    }
  }

  logout(): void{
    this.authenticationService.logout();
    this.tokenService.signOut();
    window.location.reload();
  }
}

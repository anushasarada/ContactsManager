import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', 
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isCurrentRouteDashboard: boolean
  ngOnInit() { }
  @ViewChild(MatSidenav, null)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenService: TokenService){

    if(route.snapshot.url[0].path === 'dashboard'){
        this.isCurrentRouteDashboard = true
        //router.navigate['home'] is not working 
    }
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout(){
    this.authenticationService.logout();
    this.tokenService.signOut();
    window.location.reload();
  }
}

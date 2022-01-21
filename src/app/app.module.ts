import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {MatGridListModule} from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AddContactComponent } from './components/dashboard/add-contact/add-contact.component';

import { HttpClientModule } from '@angular/common/http';
//import {authInterceptorProviders} from './_helpers/auth.intercetor'

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,    
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

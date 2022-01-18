import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './dashboard/home/home.component';
import { GroupsComponent } from './dashboard/groups/groups.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, GroupsComponent, ContactsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
  ]
})
export class MoviesModule { }
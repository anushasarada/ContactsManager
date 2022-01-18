import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddGroupComponent } from './add-group/add-group.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, GroupsComponent, ContactsComponent, AddGroupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
  ]
})
export class MoviesModule { }
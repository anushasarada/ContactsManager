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
import {MatPaginatorModule} from  '@angular/material/paginator'

@NgModule({
  declarations: [HomeComponent, GroupsComponent, ContactsComponent, AddGroupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
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
    MatPaginatorModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class DashboardModule { }
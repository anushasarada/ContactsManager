import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupsComponent } from './dashboard/groups/groups.component';
import { HomeComponent } from './dashboard/home/home.component';


const routes: Routes = [
  {path: '/dashboard', component: HomeComponent},
  {path: 'dashboard/home', component:HomeComponent},
  {path: 'dashboard/groups', component:GroupsComponent},
  {path: 'dashboard/contacts', component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

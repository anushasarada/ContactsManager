import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/home', component:HomeComponent},
  {path: 'dashboard/groups', component:GroupsComponent},
  {path: 'dashboard/contacts', component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

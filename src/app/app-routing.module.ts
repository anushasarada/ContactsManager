import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './components/dashboard/add-group/add-group.component';
import { ContactsComponent } from './components/dashboard/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupsComponent } from './components/dashboard/groups/groups.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children:[
      {
        path:'home', component: HomeComponent
      },
      {
        path:'groups', component: GroupsComponent
      },
      {
        path:'add-group', component: AddGroupComponent
      },
      {
        path:'contacts', component: ContactsComponent
      }
    ]
  },
  // {path: 'groups', component: GroupsComponent},
  // {path: 'contacts', component: ContactsComponent}, 
  {path: '', component: RegisterUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/dashboard/contacts/contacts.component';
import { GroupsComponent } from './components/dashboard/groups/groups.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent,
    children:[
      {
        path:'groups', component: GroupsComponent
      }
    ]
  },
  {path: 'groups', component: GroupsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: RegisterUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

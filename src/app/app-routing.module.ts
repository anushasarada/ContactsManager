import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

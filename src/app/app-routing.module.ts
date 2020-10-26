import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RegisterComponent } from './register/register.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'Adminlogin',
    pathMatch: 'full',
    component: AdminLoginComponent
  },
  {
    path: 'inventory',
    pathMatch: 'full',
    component: InventoryComponent
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent
  },
  {
    path: 'questionnaire',
    pathMatch: 'full',
    component: QuestionnaireComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'forum',
    pathMatch: 'full',
    component: ForumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

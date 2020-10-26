import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    RegisterComponent,
    ProfileComponent,
    InventoryComponent,
    QuestionnaireComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

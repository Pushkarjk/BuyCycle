import { AuthService } from './services/auth.service';
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
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzKPx3HADR4lROWMFkvrDTWo8JqUdLslE',
  authDomain: 'buycycle-50044.firebaseapp.com',
  databaseURL: 'https://buycycle-50044.firebaseio.com',
  projectId: 'buycycle-50044',
  storageBucket: 'buycycle-50044.appspot.com',
  messagingSenderId: '93493150072',
  appId: '1:93493150072:web:c4459d82d6715f62df888d',
  measurementId: 'G-Y8YEFW36WF'
};

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'questionnaire', component: QuestionnaireComponent},
];

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
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

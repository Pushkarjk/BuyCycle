import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PolicyService } from 'src/app/policy.service';
import { Policy } from 'src/app/policy.model';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false;
  data = null;
  constructor(public firebaseService : AuthService, private firestore: AngularFirestore){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false

    this.data = this.firestore.collection("bicycle").snapshotChanges();
    console.log(this.data);
  }
  async onSignup(email:string,password:string){
    console.log(email + password);
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }


}

import { AuthService } from './services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'buyCycle';

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit();
    window.location.replace("/");
    // window.location.reload();
  }

}

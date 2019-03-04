import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' // Firebase SDK to be intialized at the start of the App

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app';
  //currentTabClicked = 'recipes';

  // onCurrentTab(tab : string){
  //   this.currentTabClicked = tab;
  // }

  ngOnInit() {
    //configuring firebase
    firebase.initializeApp({
      apiKey: "AIzaSyDJ101S3zM1Wp0SYVEyOPcaQh18UN3R1g8",
      authDomain: "ng-recipe-book-ff9a9.firebaseapp.com",
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  checkLoadData = false;
  homeData: any;
  aboutData: any;
  workexpData: any;
  projectData: any;
  footerData: any;

  constructor(private db: AngularFireDatabase) {
    localStorage.removeItem('firebase:previous_websocket_failure');
  }

  ngOnInit() {
    // Get data from firebase
    this.db.list<any>('/').valueChanges().subscribe(resp => {
      this.homeData = resp[0].home;
      this.aboutData = resp[0].aboutme;
      this.workexpData = resp[0].workexp;
      this.projectData = resp[0].project;
      this.footerData = resp[0].footer;
      this.checkLoadData = true;
    });
  }

}

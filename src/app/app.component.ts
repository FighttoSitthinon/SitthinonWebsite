import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  homeData: any;
  aboutData: any;
  workexpData: any;
  projectData: any;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    // Get data from firebase
    this.db.list<any>('/').valueChanges().subscribe(resp => {
      this.homeData = resp[0].home;
      this.aboutData = resp[0].aboutme;
      this.workexpData = resp[0].workexp;
      this.projectData = resp[0].project;
      console.log(resp[0]);
    });
  }

}

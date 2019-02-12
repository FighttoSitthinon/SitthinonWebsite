import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeContent: DataModel;
  constructor(private db: AngularFireDatabase) {
    // Get data from firebase

    /*this.db.list<DataModel>('/').valueChanges().subscribe(x => console.log(x));
    this.db.list<any>('/content').valueChanges().subscribe(resp => {
      // this.homeContent.content = resp[0];
      console.log(resp);
    });*/
  }
}

interface DataModel {
  content: string;
  title: string;
}

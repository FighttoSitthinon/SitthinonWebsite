import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private db: AngularFireDatabase) {
    console.log(this.db.list('/content'));
    this.db.database.ref('content').once('value', x => console.log(x));
    // this.db.list<Content>('/content').valueChanges().subscribe(x => console.log(x));
  }
}


interface Content {
  test: string;
  title: string;
}

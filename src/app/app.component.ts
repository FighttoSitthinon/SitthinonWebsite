import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Get data from firebase

  }

  @HostListener('window:scroll', ['$event'])

  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below

    if (window.pageYOffset > 65) {
      document.querySelector('nav').classList.remove('on-top');
    } else {
      document.querySelector('nav').classList.add('on-top');
    }
    console.log("Scroll Event", window.pageYOffset);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../appSettings';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  IMAGES_ENDPOINT: string  = AppSettings.IMAGES_ENDPOINT;

  ngOnInit() {
  }

  scrollToPosition(id) {
    const position = document.getElementById(id).offsetTop;

    console.log('position', position);
    window.scrollTo({
      top: position - 65,
      behavior: 'smooth'
  });
  }
}



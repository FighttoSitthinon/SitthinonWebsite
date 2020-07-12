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
}

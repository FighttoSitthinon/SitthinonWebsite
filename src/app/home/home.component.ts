import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../appSettings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() data: any;

  IMAGES_ENDPOINT: string  = AppSettings.IMAGES_ENDPOINT;

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}

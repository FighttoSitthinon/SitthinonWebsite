import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.css']
})
export class WorkexpComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}

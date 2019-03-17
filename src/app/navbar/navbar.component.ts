import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // on loaded
    checkWindowSize();
    // on resized
    window.addEventListener('resize', () => {
      checkWindowSize();
    });
  }
}

function checkWindowSize(): void {
  if (window.innerWidth <= 670) {
    // console.log(window.innerWidth);
    document.getElementById('navbar1').setAttribute('hidden', 'hidden');
    document.getElementById('navbar2').removeAttribute('hidden');
  } else {
    document.getElementById('navbar1').removeAttribute('hidden');
    document.getElementById('navbar2').setAttribute('hidden', 'hidden');
  }
}


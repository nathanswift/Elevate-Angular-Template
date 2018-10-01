import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  }

  toggle() {
    console.log(true);
  }

  jump(elem) {
    $(elem.path[0]).animateCss('tada');
  }

  ngOnInit() {
  }

}

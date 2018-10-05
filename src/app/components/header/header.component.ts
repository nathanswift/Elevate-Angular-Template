import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  link() {
    console.log('Link Works');
  }


  ngOnInit() {
  }

}

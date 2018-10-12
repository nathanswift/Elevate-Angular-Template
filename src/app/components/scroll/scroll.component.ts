import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  daScroll() {
    $(window).scroll(function () {
      const document_height = $(document).height() - $(window).height();
      if ($(window).scrollTop() < document_height / 1.5) {
        $('.container').hide();
      } else {
        $('.container').show();
      }
    });
  }

  ngOnInit() {
    this.daScroll();
  }

}
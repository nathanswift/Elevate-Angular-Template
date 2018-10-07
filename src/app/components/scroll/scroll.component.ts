import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on("scroll", function() {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
          // when scroll to bottom of the page
          console.log('bottom!');
      }
    });

    $(window).bind('scroll', () => {
      if (window.scrollY < window.length) {
        console.log('top!');
      } 
    });
  }

}
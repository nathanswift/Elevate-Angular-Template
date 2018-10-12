import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { BoundText, transformAll } from '@angular/compiler/src/render3/r3_ast';
import { TranslationWidth } from '@angular/common';
import { resetApplicationState } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrolled: boolean = false;
  count: number = 0;

  constructor() { }

  follow() {
    $(document).mousemove(function (e) {
      $('.follow').offset({
        left: e.pageX,
        top: e.pageY + 20
      });
    });
  }

  link() {
    console.log('Link Works');
  }

  headerScroll() {
    const window_width = $(window).width() - $('.col-1').width();
    const document_height = $(document).height() - $(window).height();

    $(window).scroll(function () {
      if ($(window).scrollTop() < document_height / 3) {
        const scroll_position = $(window).scrollTop();
        const header_position_right = window_width - window_width * (scroll_position / document_height);
        $('.col-1').css({
          display: 'flex',
          'left': header_position_right
        });
      } 
    });
  }

  ngOnInit() {
    this.follow();
    this.headerScroll()
  }
}
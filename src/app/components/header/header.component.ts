import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { BoundText, transformAll } from '@angular/compiler/src/render3/r3_ast';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrolled: boolean = false;
  count: number = 0;

  constructor() { }

  link() {
    console.log('Link Works');
  }

  fade() {
    const $logo = $('div.col-1');
    $logo.animateCss('fadeOut', () => {
      if ($logo.css.display != 'none') {
        $logo.css({
          display: 'hidden'
        })
      }
    });
  }

  ngOnInit() {
    const window_width = $(window).width() - $('#header').width();

    const document_height = $(document).height() - $(window).height();

    $(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() < document_height/3) {
          const scroll_position = $(window).scrollTop();
          const object_position_right = window_width/1.67 - window_width * (scroll_position / document_height);
          $('#header').css({
            'left': object_position_right
          });
          $('#object').css({
            'left': object_position_right
          })
        } else if ($(window).scrollTop() > document_height/3) {
          console.log(true);
        }
      });
    });

  }
}
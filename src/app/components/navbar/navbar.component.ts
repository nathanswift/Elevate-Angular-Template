import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrolled: boolean = false;
  count: number = 0;

  constructor() {
  }

  toggle() {
    $('#navbar-logo').fadeOut();
    const $menu = $('ul#nav-btn-drop');
    $menu.css({
      display: 'flex'
    }).animateCss('fadeIn', () => {
      $menu.animate({
       fontSize: '4.25vh'
      }, 500);
      $menu.mouseleave(() => {
        $menu.animate({
          fontSize: '1em'
         }, 500);
        $menu.animateCss('fadeOut', () => {
          $('#navbar-logo').fadeIn();
          $menu.css({
            display: 'none'
          });
        });
      });
    });
  }

  link() {
    console.log('Link Works!');
  }

  jump(elem) {
    $(elem.path[0]).animateCss('pulse');
  }

  ngOnInit() {
    $('li').hover(function () {
      $(this).animateCss('flipInX');
    });
    const $nav = $('app-navbar');
    $(window).bind('scroll', () => {
      this.scrolled = true;
      this.count = 0;
      if (window.scrollY > 100) {
        $nav.fadeOut();
      } else {
        $nav.fadeIn();
      }
    });
    setInterval(() => {
      if (!this.scrolled && this.count === 1) {
        $nav.fadeIn();
      } else if (!this.scrolled) {
        this.count++;
      } else if (this.scrolled) {
        this.scrolled = false;
      }
    }, 1000);
  }

}

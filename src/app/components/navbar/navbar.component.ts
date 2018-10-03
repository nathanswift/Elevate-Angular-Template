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
    const $menu = $('ul#nav-btn-drop');
    $menu.css({
      display: 'flex',
    }).animateCss('fadeIn', () => {
      $menu.mouseleave(() => {
        $menu.animateCss('fadeOut', () => {
          $(window).off();
          $menu.css({
            display: 'none'
          });
        });
      });
    });
  }

  link() {
  }
  
  bgScroll($scope) {
    $(window).bind('scroll', () => {
    $scope.scroll = window.pageYOffset;
    $scope.height = document.getElementById('nav-btn-drop').offsetHeight;
    $scope.a = $scope.scroll / $scope.height;

    $scope.$apply();
    });
  }

  jump(elem) {
    $(elem.path[0]).animateCss('pulse');
  }

  navLink() {
    document.getElementById('navBtnDrop');
  }

  ngOnInit() {
    $('li').hover(function() {
      $(this).animateCss('flipInX');
    });
  }

}

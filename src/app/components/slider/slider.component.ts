import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    

  }

}


/* - Use this as an example to write function for what happens on mousedown. otherwise use CSS
slider() {
  $('.slider__item').on('mouseover', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('active');
  });
  $('.slider__item').on('mouseout', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('');
  });
} */
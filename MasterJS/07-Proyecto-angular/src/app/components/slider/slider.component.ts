import { Component, OnInit,Input } from '@angular/core';
declare const $: any;
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: any;
  @Input('etiquetas') captions!:boolean;

  constructor() { }

  ngOnInit(){
    $("#logo").on("click", ()=>{
      $("header").css("background","green");
    });
  
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
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

  @Output() gonseguirAutor=new EventEmitter();

  public autor:any;

  constructor() {
    this.autor={
      nombre: "Alfonso Porto",
      website: "https://portoman.github.io/",
      github: "https://github.com/portoman"
    }
   }

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

  lanzar(event: any){
    console.log(event);
    this.gonseguirAutor.emit(this.autor);
  }
}

import { Component, OnInit } from '@angular/core';
declare const $: any;
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: any;
  public anchuraToSlider:any;
  public captions:boolean;

  constructor() { 
    this.captions=false;
  }

  ngOnInit(){
   
   
  }
  cargarSlider(){
  this.anchuraToSlider=this.widthSlider;
  }
  
  resetearSlider(){
    this.anchuraToSlider=false;
  }
}

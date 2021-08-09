import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider: any;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos')textos: any;
  
  constructor() {
    this.captions = false;
  }

  ngOnInit() {

    var opcion_clasica= console.log(document.querySelector('#texto'));
    console.log(this.textos);
  }
  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider() {
    this.anchuraToSlider = false;
  }

  getAutor(event: any) {
    console.log(event);
    this.autor = event;
  }
}

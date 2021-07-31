import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean=false;
  constructor() { 
    this.identificado=true;
  }

  ngOnInit(): void {
  }
setIdentificado(){
  this.identificado=true;
}
unsetIdentificado(){
  this.identificado=false;
}
}

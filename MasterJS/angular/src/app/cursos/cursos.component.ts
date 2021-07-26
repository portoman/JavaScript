import { Component, OnInit } from '@angular/core';
//Parámetros por la url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: '*cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string | undefined;
  public followers: number |undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
      this.followers=+params.followers;
      console.log(this.nombre);

      if(this.nombre=='ninguno'){
        this.redirigir();
      }
    }
    );
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}

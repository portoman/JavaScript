//Importar modulos del router de Angular

import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Importar componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

//Array de rutas
const appRoutes: Routes =[
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'zapatillas', component:ZapatillasComponent},
    {path: 'videojuego', component:VideojuegoComponent},
    {path: 'cursos', component:CursosComponent},
    {path: 'cursos/:nombre', component:CursosComponent},
    {path: 'cursos/:nombre/:followers', component:CursosComponent},
    {path: 'externo', component:ExternoComponent},
    {path: '**', component:HomeComponent}/*Este path debe ponerse al final*/
    
];

//Exportar el módulo de router
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes); 
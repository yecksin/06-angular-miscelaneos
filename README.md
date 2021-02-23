# Descripcion

- ng-style
- ng-class
- ng-switch
- directiva personalizada
- Rutas hijas
- parametro por ruta

# Miscelaneos

ng g c components/ngStyle -it -is

crear el style y el html enel mismo ts

# Creacion de directivas

ng g d directives/resaltado



para usar manipular elementos html se impORta en la directiva ElementRef


import { Directive, ElementRef } from '@angular/core';


  constructor(private el:ElementRef) { 
    console.log("directiva llamada");
  }

  PAra manejar mosue se impORta HostListener y no se inyecta en con constructor

  import { Directive, ElementRef, HostListener } from '@angular/core';
  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor="red";

  }


# crear componentes sin carpeta de raiz

ng g c components/usuario/usuarioDetalle -is -it --flat 

# Rutas hijas

recuerda usar el router outlet en el componente hijo

para usar archivo de rutas para resumir la info se crear un archivo ts solo con las rutas





import { Routes, RouterModule } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const usuarioroutes: Routes = [
  { path: '', component: UsuarioNuevoComponent },
  { path: 'path2', component: UsuarioEditarComponent },
  { path: '**', component: UsuarioDetalleComponent },

];



luego se pone el nombre dela variable en el routin y se importa automaticamente, ejemplo

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'usuario/:id', 
    component: UsuarioComponent,
    children: usuarioroutes
  },
  { path: '**', component: HomeComponent },
];


# obetener parametros de ruta padre 

   constructor(public router:ActivatedRoute) {
    this.router.parent.params.subscribe(parametros=>{
      console.log("Ruta padre");
      console.log(parametros);
    })
   }
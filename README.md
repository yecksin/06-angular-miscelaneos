# Descripcion

- ng-style
- ng-class
- ng-switch
- directiva personalizada

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

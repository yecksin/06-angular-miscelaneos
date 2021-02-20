import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size':'15px'}">
        Hola mundo...
    </p>
    <!-- No se puede usar guion (-) para separacion, entonce se usar primeroen mayuscula -->
    <p [style.fontSize]="'40px'">
        Hola mundo...
    </p>
    <p [style.fontSize.px]="tamanno">
        Hola mundo...
    </p>
    <a class="waves-effect waves-light btn" (click)="tamanno=tamanno+5"><i class="material-icons left">add</i>button</a>
    <br>
    <br>
    <a class="waves-effect waves-light btn" (click)="tamanno=tamanno-5"><i class="material-icons left">remove</i>button</a>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamanno=20;
  constructor() { }

  ngOnInit(): void {
  }

}

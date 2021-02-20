import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  alerta = "red darken-2";
  variable = "";
  loading=false;
  propiedades:any ={
    danger:true
  }
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}

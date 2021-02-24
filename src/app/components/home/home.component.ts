import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");

  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    console.log("detecta un ccambio");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    console.log("antes de hacer el ccambio");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    console.log("despues de hacer el ccambio");

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");

  }

}

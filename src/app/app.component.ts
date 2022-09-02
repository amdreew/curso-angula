import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="verComponenteUno()">actuar</button>
    <app-uno *ngIf="mostrarComponete"></app-uno>
  `
})
export class AppComponent {

  public mostrarComponete = false;

  constructor() {
    console.log('constructor');
  }

  public verComponenteUno() {
    this.mostrarComponete = !this.mostrarComponete;
  }



}

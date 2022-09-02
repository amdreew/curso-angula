import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('app-uno ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('app-uno ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('app-uno ngOnDestroy');
    alert('cerraste el componente sin guardar tus datos quedaron almacenados temporalmente!')
  }

}

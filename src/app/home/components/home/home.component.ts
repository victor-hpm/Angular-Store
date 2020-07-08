import { Component, OnInit, AfterViewInit } from '@angular/core';
// swiper para que el slide funcione
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

 // swiper para que el slide funcione
// creamos un elemento llamado mySwiper que es de tipo swiper
// importamos e implementamos SfterViewInit
  mySwiper: Swiper;

  constructor() { }

  ngOnInit() {
  }
// declaramos el metodo e inicializamos el pligin
  ngAfterViewInit() {
      // inicializamos el pligin,
  // new Swiper es una sentencia o un constructor del plgin y
  // ('le decimos que clase css buscara para inicialezar el plugin')
    this.mySwiper = new Swiper('.swiper-container');
  }

}

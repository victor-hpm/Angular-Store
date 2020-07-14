import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { from } from 'rxjs';

import { Product } from '../../../core/models/product.model';

// 2 importamos nuestro cart.service como un ainyeccion de dependencias
// 2 y lo agregamos a nuestro constructor como una variable privada
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  // pone la fecha actual y lo tenemos que correr en el html para que aparezco
  today = new Date();

// ----hooks-
  constructor(
    // 2
    private cartService: CartService
  ) {
    console.log('1. constructor');
  }

  // nos dice cual es el valor actual y cual es nuestro valor anterior
  // ngOnChanges(changes: SimpleChanges){
  //   console.log('2. ngOnChanges');
  //   // imprimiendo en panatlla los cambios
  //   console.log(changes);
  // }

  // se ejecuta solo una ves y es cuando el componente ya fue puesto en pantalla
  ngOnInit() {
    console.log('3. ngOnInit');
  }

   // este tambien se encarga de detectar cambios, pero se hace la deteccion automatica de cambios pero a mi manera o forzada
  //  ngDoCheck(){
  //   console.log('4. ngDoCheck');
  // }


  // solo se ejecuta cuando el elento es removido de la interface
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }
  // ---hooks-----


  addCart() {
    // cuando se agrega al carro seale un mensaje de alerta
    console.log('añadir al carrito');
    // amitimos el valor el id del product seleccionado
    // y depues colocamos el output en el padre en applicationCache.component.ts como clickProduct
    // 1.1 lo cquitamos para programacion reactiva de agragar al carrrito que vine de cart.service.tst
    // 1.1 this.productClicked.emit(this.product.id);
    // 1.1 ahora importamos nustro servicio de cart

    // 2 ahora ya importado y declarado vamos a mi servicio de cart service y agregamos un producto
    // 2 al carrito con la instancia que ya tenemos aqui que es product
    this.cartService.addCart(this.product);
    // 2 ahora nos vamos al escucha del boton que agregara los priductos al carrito
    // 2.1  el cual esta en el header en shared
  }
  // no relevante
// en (input y output) e EventEmitter intervinen product.component.ts, app-component.html, app-component.ts y product.component.html

}

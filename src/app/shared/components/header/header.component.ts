import { Component, OnInit } from '@angular/core';

// 2.1 importamos nuestro cart.service como un ainyeccion de dependencias
// 2.1  y lo agregamos a nuestro constructor como una variable privada
import { CartService } from './../../../core/services/cart.service';

// 4.1 imprtamos map para transformar y para utilizar el pipe en el carrito
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 3 cracion de variable total que inicialice en 0
  total = 0;

  constructor(
     // 2.1
     private cartService: CartService
  ) {
    // 2.1 lo que tenemos que hacer aca es un escucha para que el numero de productos aumente
    // this.cartService. obsevamos dinamicamente a nuestro escuchador u obserbable del carrito
    // cart$ => { observable del carrito
    // .subscribe hacemos una subscripcion
    // (products => y obtenemos todos lo productos que vallan agregando al carrrito
    // this.cartService.cart$.subscribe(products => {
      // imprimimos los prodcutos que vallan llegando pero necesitamos el tamaño
      // 3 creamos una varibale total en el expot
    //   console.log(products);
      // 3.1 una vez creada una ves que cambie total = al tamaño de productos que haya en el carro
    //   this.total = products.length;
      // 3.1 y ahora la puedo reemplazan en nuestra variable matBadge en el html del header [matBadge]="total" para hacerlo dinamicante
    //   //
    //   //
      // 4 ahora lo haremos con pipe ya que los flujos de datos se pueden preprocesar con un pipe
      // 4.2
    this.cartService.cart$
    // agregamos la instruccion pipe
    .pipe(
      // agregamos el pipe map
      // (products => y va a obtener los productos
      // => products.length) y aqui sentencio como los va a transformar
      // map(products => products.length) es una lista de productos y lo quiero transformar
      //  a un solo valor el cual es el tamaño de esa lista
      map(products => products.length)
    )
    // al colocar este valos en el subscibe ya no nos va a llegar la lista si no el tamaño entonces nos llega el total llega transfomado
    .subscribe(total => {
      // llega transformado
      this.total = total;
    });
  }

  ngOnInit() {
  }

}

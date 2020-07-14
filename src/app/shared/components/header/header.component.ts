import { Component, OnInit } from '@angular/core';

// 2.1 importamos nuestro cart.service como un ainyeccion de dependencias
// 2.1  y lo agregamos a nuestro constructor como una variable privada
import { CartService } from './../../../core/services/cart.service';

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
    this.cartService.cart$.subscribe(products => {
      // imprimimos los prodcutos que vallan llegando pero necesitamos el tamaño
      // 3 creamos una varibale total en el expot
      console.log(products);
      // 3.1 una vez creada una ves que cambie total = al tamaño de productos que halla en el carro
      this.total = products.length;
      // 3.1 y ahora la puedo reemplazan en nuestra variable matBadge en el html del header [matBadge]="total" para hacerlo dinamicante
    });
  }

  ngOnInit() {
  }

}

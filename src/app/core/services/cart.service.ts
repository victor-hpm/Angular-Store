import { Injectable } from '@angular/core';

// 1 libreria que añade principisos reactivos a nuestra app
import { BehaviorSubject } from 'rxjs';

// 1 importamos nuestro modelo de datos nuestra interfaz
// 1 porque desde este servico vamos a ir gardando en un array todos los productos que vallan añadiendo al carrito
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    // 1 decalramos un array de productos de tipo Product que tambien es un array
  // 1 debe ser privado para que no todos tengan acceso a el sino tengan acceso a un observable o alflujo de datos que ontendremos aca
  private products: Product[] = [];
    // 1 creamos una variable cart que es un instancia de BehaviorSubject lo
  // 1 inicializamos en un array de 0 (en vacio)
  private cart = new BehaviorSubject<Product[]>([]);
    // 1 creamos una variable publica de tipo observable para que cualquiera se subscriba a el y anotar sus cambios en tiempo real
  public cart$ = this.cart.asObservable();

  constructor() { }

  // 1 por ultimo creamos el metodo para agregar un producto al carito del tipo Product
  addCart(product: Product) {
    // 1 practica de nu mutacion no utilizar push
    // 1 cada vez creamos una nueva referencia de arreglo para evitar problemas de inmutabilida d
    // 1 creamos un nueve estado del carrito
    this.products = [...this.products, product];
    //  1 notificar a todos los componentes que esten suscrtos que hubo un cambio que algo se agrego al carrito
    // 1 y le enviamos ese array,la copia del array actual o de ese nuevo estado creado
    this.cart.next(this.products);
    // 2 ahora nos falta implementarlo en product.componet.ts donde tenemos nuestro metodo de agregar al carrito
  }
}


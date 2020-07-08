import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';
// http client
import { ProductsService } from './../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // pero lo inicializamos el array en vaci (el que estaba abajo)
  // llamamos al metodo, importando ProductsService
  // y lo inyectamos como dependencias en el constructor

  products: Product[] = [];

  // ya no lo necesitamos porque estamos con el http client (esta quemada)
  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  // ];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // llamamos al metodo fecthProducts para que e ejecute en consola
    this.fecthProducts();
  }
   // metodo para leer en el componente padre y que lo lee en app.component.html
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  // cresmos metodo para ocupar la variable products que usamos en el html y que los traiga desde el  http client
  fecthProducts() {
    // hacemos refrencia a this.productsService. llamamos al metodo getAllProducts() de products.service.ts
    this.productsService.getAllProducts()
    // recibe la llamada en el subscribe debuelve un obserbable por lo que tenemos que subscribirnos para obtener la
    // respuesta y tenemos un array de products
    .subscribe(products => {
      // lo imprimimos para ver que nos trae en consola
      // console.log(products);

      // para renderizar y que aparescan los productos en la pagina
      // le asignamoa el array que trajo webService (products)
      // a nuestra variable iterable o publica para nuestro template que es (products)
      this.products = products;
    });
  }
}

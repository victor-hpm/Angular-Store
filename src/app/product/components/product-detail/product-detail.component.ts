import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // creamos una variable publica para que el template llega a ella y renderice el template
  product: Product;

  constructor(
    // inyeccion de dependencia (servicios)
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
        // manera adecuada de recibir datos
    // le decimos a this.route que quiero los parametros que tenga en la ruta
    // y luego me voy a subscribir, conforme cambi de ruta me tengo que ir subscribiendo a ese cambio
    // y lo tipamos de tipo Params
    this.route.params.subscribe((params: Params) => {
    // como ya lo tengo como un parametro json, guardamos ese id
      const id = params.id;
      // llamamos al metodo invocandolo con el id que queremos
      this.fetchProduct(id);
    // metodo para que valla y busque ayudandonos de getProduct y pueda renderizar el producto
      // this.product = this.productsService.getProduct(id);
      // imprimimos la respuesta para saber si tenemos el priducto indicado
    // console.log(product);
    });
  }

  // errror de tipado (el mismo que resolvimos con <Product[]> en products.service.ts)
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      // console.log(product);
      // hacemos la renderizacion
      // le asignamos al product el product qie resuelva nuestro servicion que hizo una peticion http
      this.product = product;
    });
  }

  // creacion del metodo de crear producto
  createProduct() {
    // necesitamos una constante del producto a crear
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'new product'
    };
    // toda esta informacion la ocupara en el this.productsService
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      // obtenemos el producto creado
      console.log(product);
      // hacemos la renderizacion
      // le asignamos al product el product qie resuelva nuestro servicion que hizo una peticion http
      // this.product = product;
    });
  }

  // se crea el metodo para actualizar un producto
  // y se manda a llamar en el product-detal.html
  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555555,
      description: 'edition title'
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  // creando metodo para eliminar un producto
  // rta es la respuesta
  deleteProduct() {
    this.productsService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }
}

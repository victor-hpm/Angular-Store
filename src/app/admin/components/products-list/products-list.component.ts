import { Product } from './../../../core/models/product.model';
import { Component, OnInit } from '@angular/core';

// inyeccion de dependencias (inyectamos el servicio que podemos crear editar eliminas)
// y lo inyectamos como una variable privada en el constructor
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  // inicializamos el array de productos en vacio
  products = [];
  // orden de las columas para la tabla
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    // ejecutamso el metodo this.fetchProducts para que se ejecute un request en network
    this.fetchProducts();
  }


  // necsitamos tener un metodos que nos traiga todos estosy datos ( productos que nos da el API)
  // y este metodo se encarga de todos esto
    fetchProducts() {
      // obtenemos todos los productos
      this.productsService.getAllProducts()
      // y nos subscribimos porque es un obserbable
      // como recibimos los productos ,
      .subscribe(products => {
        // le pasamos los productos de nuestra API a nuestro array de productos
        this.products = products;
      });
    }

    // creamos el metodo que utilizaran los botones
    deleteProduct(id: string) {
      // le decimos al this.productsService que quiero elimnar un producto le mandamos el id que quiero elimindar
      this.productsService.deleteProduct(id)
      // me suscribo para ver que se ejecute correctamente
      .subscribe(rta => {
        // imprimimos la respuesta rta para ver si lo elimino bien o mal
        // console.log('respuesta', rta);
        // mandamos un this.fetchProducts para que la tabla se actualice al momento de borrar
        this.fetchProducts();
      });
    }
}

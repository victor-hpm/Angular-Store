// default
import { Injectable } from '@angular/core';

// es para decirle a angular que es un array de tupo <Product[]> y que this.products = products;
// de products.component.ts no de error de que no hay macht
import { Product } from './../../models/product.model';

// importamos el cliente de http, el modulo no ya que ese lo importamos en app.module.ts
import { HttpClient } from '@angular/common/http';

// importamos environment para pasar nuestras variables de ambiente la cual es la url_api por el momento
import { environment } from './../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // ya no lo necesitamos gracias al http
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
    // inyectamos dependencia para http client
    private http: HttpClient
  ) { }

  getAllProducts() {
    // metodo en el que obtiene todos los productos
    // return this.products;  cambiamos la peticion a http
    return this.http.get<Product[]>(`${environment.url_api}/products`);
    // get es para solicitar informacion, para hacer lectura de informacion
    // con esto angular obtendra datos que esto retorne y me lo manipulara como uj objeto json
    // <Product[]> estamos tipando diciedo que es de<Product[]> tipo Object y es un array
  }

  //  necesito un metodo para que busque un id y debuelva esa definicion del producto como tal
    // recibe id del priducto que quiero buscar y luego hace una busqueda en el array productos y agarra el que coninside con el id
  getProduct(id: string) {
    // obtendremos segun un id la informacion detallada de un producto
    // return this.products.find(item => id === item.id); cambiamos la peticion a http
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    // con esto se hace la peticion y acemos la concatenacion del id para la info de cada producto por separado
    // <Product[]> estamos tipando diciedo que es de<Product> tipo Object y que es un solo producto no una lista
  }

  // poust y (product: Product) esta mos tipando
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
    // cada ves que llamemos a este metodo sera la creacion de un producto, de cuerpo , product
    // creamos el metodo createProducte detail.ts
    // la ejecucion del metodo estara en el detail.html
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}

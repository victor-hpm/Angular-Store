import { Component, OnInit } from '@angular/core';

// 1necesitamos importar de angularForms
// 1FormBuilder extension de angular que nos sirve para crear ese gurpo rapidamente, este es una inyeccion en constructor
// 1FormGroup que es un grupo de controladores para el EmailValidator, titulo , descripcion, etc, este es un tipado
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// 4 importamos a nuestro router para agregar nustro admimProduct a la lista de inventario
// 4 y por ende a nustuestro api de productos
import { Router } from '@angular/router';
// 4 la inyectamos como dependencia en el constructor

// 3 como ya teniamor un metodo que creaba un producto
// 3y lo agregaba a nuestra api ,el cual esta el el core lo importamos
// 3de esta menera creamos un prodcuro que se esta recogiendo en el formulario
import { ProductsService } from './../../../core/services/products/products.service';
// 3lo anexamos como una inyeccion de dependencias en el contructor como privado

// 5 importamos myvalidators con el nombre de mi clase para utilizarlo
import { MyValidators } from './../../../utils/myvalidators';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  // 1lo tipamos el formulario es de tipo FormGroup
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // 1
    private productsService: ProductsService,
    // 3y con esto ya lo podemos utilizar en saveProduct
    // 4 para poder utilizarlo y redireccionar al inventario del adminProduct
    private router: Router
  ) {
    // 1lo mandamos a llamar en el contructor
    // 1y despues vamos al html a crear el formulario enlazandolo con el [formGroup]="form"
    this.buildForm();
  }

  ngOnInit() {
  }
  // 1creamos el metodo para crear el formulario
  private buildForm() {
    // 1llamamos a nuestra instancia de this.formBuilder.group dice que podemos crear un grupo de form controls basados en un json
    // 1en ves de estar creando instancia por instancia y crear en un json todos los form crontrol que necesitemos
    this.form = this.formBuilder.group({
      // lo que necesitamos
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      // 5 ahora si podemos utilizar nuestra nueva malidacion
      // 5 para ver el error de esta validacion lo imprimimos en el html con un parrafo
      price: ['', [Validators.required, MyValidators.isProceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
  // 1estos metodos los poemos llamar en en contructor o en ngOnInit pero
  // 1ngOnInit es solo para llamar datos y nuestro metodo builForm es una contruccion
  // 1por lo tanto lo llmaamos en el contructor



  // 1 metodo para guardar el procucto
  saveProduct(event: Event) {
    // 1event: Event cancelamos el atash del evento
    // 1aqui se le dice que evite su comportamiento por defecto que es enviar y recargar
    // 1ahora con esto hara el comportamiento que le digamos
    // 1 buena practica
    event.preventDefault();
    // 3 utilizanco el ProductsService para agregar el nuevo producto desde admin
    // 3hacemos una pregunta para ver si ese formulario es valido
    if (this.form.valid) {
      // 3guardamos el prodcut
      const product = this.form.value;
      // 3y lo incertamos a nuestra base de datos y createProduct le decimos crea este producto
      this.productsService.createProduct(product)
      // 3nos subcribimos y una ves termindao me devolvera el prodcuto que fue creado
      // 3((adminProduct aqui lo obtengo
      .subscribe((adminProduct) => {
        // 3una vez creado lo imprimimos y lo redireccionamos a nuestra lista de inventario 4
          console.log(adminProduct);
          // 4 pero mejor lo redireccionamos hacia el inventario y necesitamos importar a nuestro router
          // 4 una ves ya importado y con la inyeccion de dependencias
          // 4 lo redireccinamos
          // 4  ve hacia el router y navega this.router.navigate(['./admin/products']);
          // 4 a la ruta de nuestra lista de productos ya que esta creado el adminPorduct
          this.router.navigate(['./admin/products']);
      });
    }
    // 1console.log(this.form.value);
    // 1y se ejecuta en el html con un (ngSubmit)="saveProduct($event)"
    // 1$event para evitar renderizaciones incorrectas ya que un
    // 1formulario va a intentar por defecto enviar el contenido y recargar la pagina
  }

  // 7 para no repetir tanto form.get('price'), y lo cambiamos en el html por el priceField como variable
  // estos son metodos getes y setes nativos de de JS y TS
  get priceField() {
    return this.form.get('price');
  }

}

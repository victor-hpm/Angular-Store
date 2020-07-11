import { Component, OnInit } from '@angular/core';

// para formularios reactivos
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // aqui solo tipamos le decimos que el emailField es de tipo FormControl
  // y en el contructor lo tenemos que contruir
  emailInput: FormControl;

  constructor() {
    // 1quie lo construimos y le decimos que
    // 1this.emailField es igual a una instancia de FormControl(); despues mandamos  formControl]="emailInput" al html
    // 2 el pirmer ('' es con lo que iniciara en el input, [Validator.taratara,
    // ] despues tenemos un array de validaciones )
    this.emailInput = new FormControl('', [
      // le decimo que tambien sea requerido, que no acepte un campo en vacio
      Validators.required,
      Validators.email
      // Validators.minLength(4),
      // Validators.maxLength(10)
      // 2 estas validaciones las podemos imprimir en el html con {{}}
    ]);

    // ----para escucha-pendiente el cambio dinamicamente---
    // 1y ya tenemos todo un controlador para este dado de elmail
    // 1como hacer para ver la mutacion (cambio de los datos)
    // this.emailInput.valueChanges
    // 1y nos subcribimos para que lo devuelva en forma de string de datos
    // .subscribe(value => {
      // console.log(value);
      // 1y nos subscribimos cada ves que cambie
    // });
  }

  ngOnInit() {

  }
  // boton para mandar el email
  // lo mandamos a llamar con el metodo (clik) en html
  sendEmail() {
    // vefifica que sea valido
    if (this.emailInput.valid) {
      // impreme el valor sin necesidad de subscribirme
      console.log(this.emailInput.value);
    }
  }

}

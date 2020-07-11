
// 1 para el control de isPriceValid que sea de tipo AbstractControl
import { AbstractControl } from '@angular/forms';

export class MyValidators {

  // staico para que se pueda ocupar en las validaciones
  static isProceValid(control: AbstractControl) {
    // 1 conocemos el valor actual
    const value = control.value;
    // 1.1 para debuguear checamos el valor que le esta llegando
    console.log(value);
    // 1 ahora si podemos saber operarlo (la validacion que yo quiera hacer)
    // 1 preguntamos si el valor es mayor a 10000
    if (value > 10000) {
      // 1 si es asi manda un objeto con el nombre del error en true
      return {price_invalid: true};
    }
    // 1 si cumplio retornamos un null (todo esta bien)
    return null;

    // 2 para utilizarla la importamos en donde la queremos utilizar
    // en este caso la importamos en form-product.component.ts (num5)
  }

}

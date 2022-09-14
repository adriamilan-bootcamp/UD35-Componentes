import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ejercicio02';

  listado: Array<object> = [];
  captchaValidator: any = null;
  emailValidator: any = null;
  validator: boolean = false;

  public  formForm: FormGroup;
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  captcha: string = '';

  constructor(private fb: FormBuilder) {
    this.formForm = this.fb.group({
      nombre: '',
      email: '',
      mensaje: '',
      captcha: ''
    })
  }

  validarCampos() {
    
    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (this.email.match(emailRegex)) {
      this.emailValidator = true
    } else {
      this.emailValidator = false
    }

    if (this.captcha == '5') {
      this.captchaValidator = true
    } else {
      this.captchaValidator = false
    }

    if (this.emailValidator && this.captchaValidator) {
      this.validator = true
    }
  }

  guardarForm() {
    this.nombre = this.formForm.get('nombre')?.value;
    this.email = this.formForm.get('email')?.value;
    this.mensaje = this.formForm.get('mensaje')?.value;
    this.captcha = this.formForm.get('captcha')?.value;

    this.validarCampos()

    if(this.validator) {
      this.listado.push({
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
        captcha: this.captcha
      })
    }
  }
}

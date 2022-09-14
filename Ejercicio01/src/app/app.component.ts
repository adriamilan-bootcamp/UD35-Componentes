import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ejercicio01';

  listado: Array<object> = [];

  public  clienteForm: FormGroup;
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: '',
      cif: '',
      direccion: '',
      grupo: ''
    })
  }

  guardarCliente() {
    this.nombre = this.clienteForm.get('nombre')?.value;
    this.cif = this.clienteForm.get('cif')?.value;
    this.direccion = this.clienteForm.get('direccion')?.value;
    this.grupo = this.clienteForm.get('grupo')?.value;

    this.listado.push({
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    })

    console.log(this.listado)
  }
}

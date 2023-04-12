import { Component, OnInit } from '@angular/core';
import { Damnificado } from 'src/app/model/Damnificado';

import { FormGroup, FormControl } from '@angular/forms';
import { DamnificadoService } from 'src/app/service/Damnificado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-damnificado-creaedita',
  templateUrl: './damnificado-creaedita.component.html',
  styleUrls: ['./damnificado-creaedita.component.css']
})
export class DamnificadoCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  damnificado:Damnificado = new Damnificado();
  mensaje:string = 'Completa';


  constructor(private aS: DamnificadoService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      dni: new FormControl(),
      nombres: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      peso: new FormControl(),
      telefono: new FormControl(),
      contrasena: new FormControl(),
      correo: new FormControl()
    });
  }

  aceptar(): void {
    this.damnificado.dni = this.form.value['dni'];
    this.damnificado.nombres = this.form.value['nombres'];
    this.damnificado.apellidos = this.form.value['apellidos'];
    this.damnificado.edad = this.form.value['edad'];
    this.damnificado.peso=this.form.value['peso'];
    this.damnificado.telefono=this.form.value['telefono'];
    this.damnificado.contrasena=this.form.value['contrasena'];
    this.damnificado.correo=this.form.value['correo'];

    if (
      this.form.value['dni'].length > 0
    ) {
      this.aS.insert(this.damnificado).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['Damnificados']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }
}

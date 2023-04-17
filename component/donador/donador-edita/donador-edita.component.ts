import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Damnificado } from 'src/app/model/Damnificado';
import { Donador } from 'src/app/model/Donador';
import { DonadorService } from 'src/app/service/Donador.service';

@Component({
  selector: 'app-donador-edita',
  templateUrl: './donador-edita.component.html',
  styleUrls: ['./donador-edita.component.css']
})
export class DonadorEditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  donador:Donador = new Donador();
  mensaje:string = 'Completa';


  constructor(private aS: DonadorService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
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
    this.donador.dni = this.form.value['dni'];
    this.donador.nombres = this.form.value['nombres'];
    this.donador.apellidos = this.form.value['apellidos'];
    this.donador.edad = this.form.value['edad'];
    this.donador.telefono=this.form.value['telefono'];
    this.donador.contrasena=this.form.value['contrasena'];
    this.donador.correo=this.form.value['correo'];
    this.donador.ong=this.form.value['ong'];

    if (
      this.form.value['dni'].length > 0
    ) {
      this.aS.insert(this.donador).subscribe((data) => {
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

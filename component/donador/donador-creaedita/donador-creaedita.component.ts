import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Donador } from 'src/app/model/Donador';
import { DonadorService } from 'src/app/service/Donador.service';

@Component({
  selector: 'app-donador-creaedita',
  templateUrl: './donador-creaedita.component.html',
  styleUrls: ['./donador-creaedita.component.css']
})
export class DonadorEditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  donador:Donador = new Donador();
  mensaje:string = 'Completa por favor';

  id: number = 0;
  edicion: boolean = false;

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
      this.form.value['dni'].length > 0 &&
      this.form.value['nombres'].length> 0 &&
      this.form.value['apellidos'].length>0
    ) {
      if(this.edicion){
        //actualice
        this.aS.update(this.donador).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else{
      this.aS.insert(this.donador).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
    }
      this.router.navigate(['Donadores']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          dni: new FormControl(data.dni),
          nombres: new FormControl(data.nombres),
          apellidos: new FormControl(data.apellidos),
          edad:new FormControl(data.edad),
          telefono: new FormControl(data.telefono),
          contrasena:new FormControl(data.contrasena),
          correo:new FormControl(data.correo),
          ong:new FormControl(data.ong)
        });
      });
    }
  }

}

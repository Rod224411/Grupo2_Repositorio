import { Component, OnInit } from '@angular/core';
import { Damnificado } from 'src/app/model/Damnificado';

import { FormGroup, FormControl } from '@angular/forms';
import { DamnificadoService } from 'src/app/service/Damnificado.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-damnificado-creaedita',
  templateUrl: './damnificado-creaedita.component.html',
  styleUrls: ['./damnificado-creaedita.component.css']
})
export class DamnificadoCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  damnificado:Damnificado = new Damnificado();
  mensaje:string = 'Completa';

  id: number = 0;
  edicion: boolean = false;

  constructor(private aS: DamnificadoService, private router: Router,    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
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
    this.damnificado.id=this.form.value['id'];
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
      if(this.edicion){
        //actualice
        this.aS.update(this.damnificado).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else{
        this.aS.insert(this.damnificado).subscribe(data=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['Damnificados']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }

  //para editar
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          dni: new FormControl(data.dni),
          nombres: new FormControl(data.nombres),
          apellidos: new FormControl(data.apellidos),
          edad:new FormControl(data.edad),
          peso:new FormControl(data.peso),
          telefono: new FormControl(data.telefono),
          contrasena:new FormControl(data.contrasena),
          correo:new FormControl(data.correo)
        });
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { UbicacionService } from 'src/app/service/Ubicacion.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-ubicacion-creaedita',
  templateUrl: './ubicacion-creaedita.component.html',
  styleUrls: ['./ubicacion-creaedita.component.css']
})
export class UbicacionCreaeditaComponent implements OnInit{
  form: FormGroup=new FormGroup({});
  ubicacion:Ubicacion=new Ubicacion();
  mensaje:string="";
  maxFecha:Date= moment().add(-1,'days').toDate();

  constructor(private aS:UbicacionService,private router:Router){
  }
  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl(),
      departamento:new FormControl(),
      distrito:new FormControl(),
      direccion: new FormControl()
    });
  }
  aceptar(): void{
    this.ubicacion.id=this.form.value['id'];
    this.ubicacion.departamento=this.form.value['departamento'];
    this.ubicacion.distrito=this.form.value['distrito'];
    this.ubicacion.direccion=this.form.value['direccion'];
    if(this.form.value['departamento'].length>0&&this.form.value['direccion'].length>0){
      this.aS.insert(this.ubicacion).subscribe(data=>{
        this.aS.list().subscribe(data=>{
          this.aS.setList(data);
        })
      })
      this.router.navigate(['Ubicaciones'])
      this.mensaje = 'Buen Trabajo';
    }else{
      this.mensaje = 'Complete los campos requeridos!';
    }


  }
  }


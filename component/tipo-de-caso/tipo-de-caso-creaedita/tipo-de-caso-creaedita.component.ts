import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { tipo_de_caso } from 'src/app/model/tipo-de-caso';
import { tipo_de_casoService } from 'src/app/service/tipo-de-caso.service';

@Component({
  selector: 'app-tipo-de-caso-creaedita',
  templateUrl: './tipo-de-caso-creaedita.component.html',
  styleUrls: ['./tipo-de-caso-creaedita.component.css']
})
export class TipoDeCasoCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tipo:tipo_de_caso = new tipo_de_caso();
  nombre:string="";
  descripcion:string="";
  mensaje: string="";
  id: number=0;
  edicion:boolean =false;
  constructor(private aS:tipo_de_casoService, private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion =data['id'] != null;
      this.init();

    })
    this.form = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    descripcion: new FormControl()
  });
  }
  aceptar():void{
    this.tipo.id = this.form.value['id'];
    this.tipo.nombre = this.form.value['nombre'];
    this.tipo.descripcion = this.form.value['descripcion'];

    if (this.form.value['nombre'].length > 0 &&
    this.form.value['descripcion'].length > 0) {

      if(this.edicion){
        this.aS.update(this.tipo).subscribe((data)=>{
          this.aS.list().subscribe(data =>{
            this.aS.setList(data);
          })
        })
      }else{
        this.aS.insert(this.tipo).subscribe(data=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }
        this.router.navigate(['tipo']);
      }else {
        this.mensaje='Complete los campos requeridos!!!';
      }
  }
  init(){
    if (this.edicion) {
      this.aS.listID(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(),
          descripcion: new FormControl()
        })
      })
    }
  }
}

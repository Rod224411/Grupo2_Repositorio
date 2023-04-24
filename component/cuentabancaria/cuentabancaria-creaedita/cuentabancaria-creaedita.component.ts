import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cuentabancaria-creaedita',
  templateUrl: './cuentabancaria-creaedita.component.html',
  styleUrls: ['./cuentabancaria-creaedita.component.css']
})
export class cuentabancariaCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  cuentabancaria:cuentabancaria = new cuentabancaria();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje:string = 'Completa';
  id: number = 0;
  edicion: boolean = false;

  constructor(private aS: cuentabancariaService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      numero: new FormControl(),
      cvv: new FormControl(),
      vencimiento: new FormControl()
    });
  }

  aceptar(): void {
    this.cuentabancaria.id=this.form.value['id'];
    this.cuentabancaria.numero = this.form.value['numero'];
    this.cuentabancaria.cvv = this.form.value['cvv'];
    this.cuentabancaria.vencimiento = this.form.value['vencimiento'];

    if (
      this.form.value['numero'].length > 0
    ) {
      if(this.edicion){
        //actualice
        this.aS.update(this.cuentabancaria).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else{
        this.aS.insert(this.cuentabancaria).subscribe(data=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['cuentabancarias']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
}

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          numero: new FormControl(data.numero),
          cvv: new FormControl(data.cvv),
          vencimiento: new FormControl(data.vencimiento)
        });
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';

import { FormGroup, FormControl } from '@angular/forms';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentabancaria-creaedita',
  templateUrl: './cuentabancaria-creaedita.component.html',
  styleUrls: ['./cuentabancaria-creaedita.component.css']
})
export class cuentabancariaCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  Cuentabancaria:cuentabancaria = new cuentabancaria();
  mensaje:string = 'Completa';


  constructor(private aS: cuentabancariaService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      numero: new FormControl(),
      cvv: new FormControl(),
      vencimiento: new FormControl()      
    });
  }

  aceptar(): void {
    this.cuentabancaria.numero = this.form.value['numero'];
    this.cuentabancaria.cvv = this.form.value['cvv'];
    this.cuentabancaria.vencimiento = this.form.value['vencimiento'];    

    if (
      this.form.value['numero'].length > 0
    ) {
      this.aS.insert(this.cuentabancaria).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['cuentabancarias']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }
}

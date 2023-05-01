import { Component } from '@angular/core';
import { Damnificado } from 'src/app/model/Damnificado';
import {MatTableDataSource} from '@angular/material/table'
import { Donador } from 'src/app/model/Donador';
import { DamnificadoListarComponent } from '../../Damnificado/Damnificado-listar/Damnificado-listar.component';
import { DonadorService } from 'src/app/service/Donador.service';
@Component({
  selector: 'app-donador-listar',
  templateUrl: './donador-listar.component.html',
  styleUrls: ['./donador-listar.component.css']
})
export class DonadorListarComponent {

  lista: Donador[]=[]
  dataSource:MatTableDataSource<Donador>=new MatTableDataSource();
  displayedColumns:string[]=['dni','nombres','apellidos','accion01']

  constructor(private aS:DonadorService){

  }




  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }


  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  }


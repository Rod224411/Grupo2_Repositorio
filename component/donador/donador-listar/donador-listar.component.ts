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
  idMayor: number = 0;
  displayedColumns:string[]=['dni','nombres','apellidos','accion01']

  constructor(private aS:DonadorService,  private dialog:MatDialog){

  }

    // Variable para determinar si la tabla se muestra o no
    tablaVisible = false;

    // Función que se ejecuta al hacer clic en el botón para mostrar la tabla
    mostrarTabla() {
      if (this.tablaVisible == true) {
        this.tablaVisible = false;
      } else {
        this.tablaVisible = true;
      }
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


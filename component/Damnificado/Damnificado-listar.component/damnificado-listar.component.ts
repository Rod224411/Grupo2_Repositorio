import { Component, OnInit } from '@angular/core';
import { Damnificado } from 'src/app/model/Damnificado';
import {MatTableDataSource} from '@angular/material/table'
import { DamnificadoService } from 'src/app/service/Damnificado.service';
@Component({
  selector: 'app-Damnificado-listar',
  templateUrl: './Damnificado-listar.component.html',
  styleUrls: ['./Damnificado-listar.component.css']
})
export class DamnificadoListarComponent implements OnInit{
lista: Damnificado[]=[]
dataSource:MatTableDataSource<Damnificado>=new MatTableDataSource();
displayedColumns:string[]=['dni','nombres','apellidos','correo']

constructor(private aS:DamnificadoService){
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
}
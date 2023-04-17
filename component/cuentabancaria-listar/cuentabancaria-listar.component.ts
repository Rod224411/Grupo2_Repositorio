import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';
import {MatTableDataSource} from '@angular/material/table'
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';
@Component({
  selector: 'app-cuentabancaria-listar',
  templateUrl: './cuentabancaria-listar.component.html',
  styleUrls: ['./cuentabancaria-listar.component.css']
})
export class cuentabancariaListarComponent implements OnInit{
lista: cuentabancaria[]=[]
dataSource:MatTableDataSource<cuentabancaria>=new MatTableDataSource();
displayedColumns:string[]=['numero','cvv','vencimiento']

constructor(private aS:cuentabancariaService){
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

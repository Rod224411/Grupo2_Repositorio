import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { tipo_de_casoService } from 'src/app/service/tipo-de-caso.service';
import { tipo_de_caso } from 'src/app/model/tipo-de-caso';
@Component({
  selector: 'app-tipo-de-caso-listar',
  templateUrl: './tipo-de-caso-listar.component.html',
  styleUrls: ['./tipo-de-caso-listar.component.css']
})
export class tipo_de_casoListarComponent implements OnInit{
lista: tipo_de_caso[]=[]
dataSource:MatTableDataSource<tipo_de_caso>=new MatTableDataSource();
displayedColumns:string[]=['id','nombre','descripcion','acciones1','acciones2']

constructor(private aS:tipo_de_casoService){

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
  this.aS.list().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })

  this.aS.getList().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })
}
boton_eliminar(idd:number){
  this.aS.delete(idd).subscribe(data=>{
    this.aS.list().subscribe(data =>{
      this.aS.setList(data);
    })
  })
}
filter(e: any) {
  this.dataSource.filter = e.target.value.trim();
}
}

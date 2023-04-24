import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/model/Ubicacion';
import {MatTableDataSource} from '@angular/material/table'
import { UbicacionService } from 'src/app/service/Ubicacion.service';
@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionlistarComponent implements OnInit{
  lista: Ubicacion[]=[]
  dataSource:MatTableDataSource<Ubicacion>=new MatTableDataSource();
  displayedColumns:string[]=['id','departamento','distrito','direccion','accion01']

  constructor(private aS:UbicacionService){

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
  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
  }

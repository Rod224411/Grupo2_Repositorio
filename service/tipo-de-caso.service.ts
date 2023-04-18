import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tipo_de_caso } from '../model/tipo-de-caso';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class tipo_de_casoService {
private url=`${base_url}/Tipos_de_caso`
private listaCambio = new Subject<tipo_de_caso[]>()

  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<tipo_de_caso[]>(this.url);
  }
  insert(Tipo_Caso:tipo_de_caso){
    return this.http.post(this.url,Tipo_Caso);
  }
  setList(ListaNueva:tipo_de_caso[]){
    this.listaCambio.next(ListaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}

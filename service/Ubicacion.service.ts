import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ubicacion } from '../model/Ubicacion';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
private url=`${base_url}/Ubicaciones`
private listaCambio= new Subject<Ubicacion[]>()
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<Ubicacion[]>(this.url);
  }
  insert(ubicacion:Ubicacion){
    return this.http.post(this.url,ubicacion);
  }
  setList(listaNueva:Ubicacion[]){
this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Ubicacion>(`${this.url}/${id}`);
  }
  update(aut: Ubicacion) {
    return this.http.put(this.url + "/" + aut.id, aut);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

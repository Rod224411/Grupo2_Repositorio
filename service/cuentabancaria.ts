import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cuentabancaria } from '../model/cuentabancaria';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class cuentabancariaService {
  private url = `${base_url}/cuentabancarias`
  private listaCambio = new Subject<cuentabancaria[]>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<cuentabancaria[]>(this.url);
  }

  insert(cuentabancaria:cuentabancaria) {
    return this.http.post(this.url, cuentabancaria);
  }

  setList(ListaNueva:cuentabancaria[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(id: number) {
    return this.http.get<cuentabancaria>(`${this.url}/${id}`);
  }

  update(aut: cuentabancaria) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    return this.http.put(this.url + '/' + aut.id, aut);
  }

  //para eliminar damnificado
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

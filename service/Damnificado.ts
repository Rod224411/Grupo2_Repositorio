import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Damnificado } from '../model/Damnificado';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class DamnificadoService {
  private url = `${base_url}/Damnificados`
  private listaCambio = new Subject<Damnificado[]>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Damnificado[]>(this.url);
  }

  insert(damnificado:Damnificado) {
    return this.http.post(this.url, damnificado);
  }

  setList(ListaNueva:Damnificado[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}

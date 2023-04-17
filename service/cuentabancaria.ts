import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cuentabancaria } from '../model/cuentabancaria';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})

export class cuentabancariaService {
private url=`${base_url}/cuentabancarias`
 private listaCambio = new Subject<cuentabancaria[]>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<cuentabancaria[]>(this.url);
  }

  insert(CuentaBancaria:cuentabancaria) {
    return this.http.post(this.url, cuentabancaria);
  }

  setList(ListaNueva:cuentabancaria[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}

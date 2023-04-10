import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuentaBancaria } from '../model/cuentaBancaria';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})

export class cuentaBancariaService {
private url=`${base_url}/cuentaBancarias`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<cuentaBancaria[]>(this.url);
  }
}

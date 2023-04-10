import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuentaBancaria } from '../model/CuentaBancaria';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})

export class CuentaBancariaService {
private url=`${base_url}/CuentaBancarias`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<CuentaBancaria[]>(this.url);
  }
}

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cuentabancaria } from '../model/cuentabancaria';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})

export class cuentabancariaService {
private url=`${base_url}/cuentabancarias`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<cuentabancaria[]>(this.url);
  }
}

//En Service

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Damnificado } from '../model/Damnificado';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DamnificadoService {
private url=`${base_url}/Damnificados`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<Damnificado[]>(this.url);
  }
}

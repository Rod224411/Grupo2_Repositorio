import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donador } from '../model/Donador';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DonadorService {
private url=`${base_url}/Donadores`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<Donador[]>(this.url);
  }
}

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ubicacion } from '../model/Ubicacion';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
private url=`${base_url}/Ubicaciones`
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<Ubicacion[]>(this.url);
  }
}

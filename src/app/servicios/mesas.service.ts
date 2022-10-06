import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesas } from '../modelos/mesas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http:HttpClient) { 

  }
  getMesas():Observable<Mesas[]>{
    return this.http.get<Mesas[]>('${environment.url-backend-results}/mesas/${id}');
  }
  //crearMesas(mesas:Object):Observable<Mesas>{
    //return this. http.post('${environment.url-backend-results}/mesas', mesas);
  //}
  editarMesas(id:number,lasMesas:Mesas){
    return this.http.put('${environment.url-backend-results}/mesas', lasMesas);
  }
  eliminarMesas(id: number){
    return this.http.delete<Mesas>('${environment.url-backend-resultsy}/mesas/${id}',);
  }
  
  
}

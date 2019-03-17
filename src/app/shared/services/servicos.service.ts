import { Injectable } from '@angular/core';
import { Servico } from 'src/app/model/servico';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(public http: HttpClient) { }

  findAll() : Observable<Servico[]>{
    return this.http.get<Servico[]>(`${API_CONFIG.baseUrl}/servicos`)
  }

  findById(id : string): Observable<Servico>{
    return this.http.get<Servico>(`${API_CONFIG.baseUrl}/servicos/${id}`)
  }
}

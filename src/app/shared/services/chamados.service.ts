import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';
import { Chamado } from 'src/app/model/chamados';
import { ChamadoDTO } from 'src/app/model/DTO/chamado.dto';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  constructor(public http: HttpClient) { }

  findAll() : Observable<Chamado[]>{
    return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/chamados`)
  }

  findById(id : string): Observable<Chamado>{
    return this.http.get<Chamado>(`${API_CONFIG.baseUrl}/chamados/${id}`)
  }

  insert(chamadoDTO: ChamadoDTO){
    return this.http.post(
      `${API_CONFIG.baseUrl}/chamados`,
      chamadoDTO,
      {
        observe: 'response',
        responseType:'text'
      }
    )}


}

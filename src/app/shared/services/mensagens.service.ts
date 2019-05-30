import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';
import { Mensagem } from 'src/app/model/mensagens';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(public http: HttpClient) { }

  public insertMensagem(mensagem) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/mensagens`,
        { mensagem: mensagem.mensagem,
        chamado:{
          "codigo" : mensagem.chamado.codigo
        },
      usuario:{
        "codigo" : "1"
      }}
      )}

    public getMensagem(chamado): Observable<any> {
      return this.http.get(`${API_CONFIG.baseUrl}/mensagens/chamados/` + chamado.codigo);
    } 
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../componentes/cadastro/Perfil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindFlowService {

  private readonly API = 'http://localhost:3000/perfis';

  constructor(private http: HttpClient) {}

  cadastrar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.API, perfil);
  }
}

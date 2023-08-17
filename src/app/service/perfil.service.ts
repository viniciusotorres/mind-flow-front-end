import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service'; // Importe o serviço de usuário
import { IUsuario } from '../interfaces/IUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = 'http://localhost:3000/usuarios'; // Substitua pela URL da sua API fake

  constructor(
    private http: HttpClient, // Injete o HttpClient
    private usuarioService: UsuarioService
  ) {}

  obterUsuarioLogado(): Observable<IUsuario> {
    const userId = this.usuarioService.obterIdUsuarioLogado; // Use o método para obter o ID do usuário logado do serviço UsuarioService
    return this.http.get<IUsuario>(`${this.url}/${userId}`);
  }

  atualizarPerfil(usuario: IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.url}/${usuario.id}`, usuario);
  }
}

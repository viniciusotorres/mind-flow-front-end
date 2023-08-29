import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service'; // Importe o serviço de usuário
import { IUsuario } from '../interfaces/IUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = 'http://localhost:3000/usuarios';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  obterUsuarioLogado(): Observable<IUsuario> {
    const userId = this.usuarioService.obterIdUsuarioLogado;
    return this.http.get<IUsuario>(`${this.url}/${userId}`);
  }

  atualizarPerfil(usuario: IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.url}/${usuario.id}`, usuario);
  }
}

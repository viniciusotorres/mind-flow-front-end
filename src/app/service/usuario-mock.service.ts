import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';
import { ITarefa } from '../interfaces/ITarefa';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMockService {

  private apiUrl = 'http://localhost:3000/tarefas';
  constructor(private httpClient: HttpClient) { }

  logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/usuarios').pipe(
      map((usuariosRegistrados: IUsuario[]) => {
        const usuarioEncontrado = usuariosRegistrados.find(u => u.email === usuario.email && u.senha === usuario.senha);
        if (usuarioEncontrado) {
          return {
            sucesso: true,
            tokenQueSeriaGeradoPelaAPI: 'TokenGeradoPelaAPI',
            usuario: usuarioEncontrado
          };
        } else {
          return {
            sucesso: false,
            mensagem: 'Credenciais inválidas'
          };
        }
      })
    );
  }
  obterDadosUsuario(idUsuario: number): Observable<IUsuario> {
    return this.httpClient.get<IUsuario>(`http://localhost:3000/usuarios/${idUsuario}`);
  }

}




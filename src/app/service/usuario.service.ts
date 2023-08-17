import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/IUsuario';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioMockService } from './usuario-mock.service'; // Importe o novo serviço mock

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private router: Router, private usuarioMockService: UsuarioMockService) {}



  logar(usuario: IUsuario): Observable<any> {
    return this.usuarioMockService.logar(usuario).pipe(
      tap((resposta) => {
        if (resposta.sucesso) {
          localStorage.setItem('token', btoa(JSON.stringify(resposta.tokenQueSeriaGeradoPelaAPI)));
          localStorage.setItem('usuario', btoa(JSON.stringify(resposta.usuario)));
          this.router.navigate(['']);
        }
      })
    );
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

   obterUsuarioLogado(): IUsuario | null {


    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(atob(usuarioString)) : null;
  }

  get obterIdUsuarioLogado(): number | null {
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? (JSON.parse(atob(usuarioString)) as IUsuario).id : null;
  }

  get obterTokenUsuario(): string | null {
    const tokenString = localStorage.getItem('token');
    return tokenString ? JSON.parse(atob(tokenString)) : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}


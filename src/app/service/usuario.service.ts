import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {IUsuario} from "../interfaces/IUsuario";
import { NgZone } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080';

  private autenticacaoSubject = new BehaviorSubject<boolean>(false);
  autenticacaoObservable: Observable<boolean> = this.autenticacaoSubject.asObservable();



  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService) {}



  login(usuarioDeLogin: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, usuarioDeLogin).pipe(
      tap(() => {
        this.autenticacaoSubject.next(true);
        window.location.reload();
      }),
      catchError(error => {
        this.autenticacaoSubject.next(false);
        throw error;
      })
    );
  }

  registrarUsuario(usuario: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, usuario, { responseType: 'text' });
  }

  deslogar() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  notificarEstadoAutenticacao(logado: boolean): void {
    this.autenticacaoSubject.next(logado);
  }
  obterUsuarioLogado(): IUsuario | null {
    const token = localStorage.getItem('token');

    try {
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        const decodedToken = this.jwtHelper.decodeToken(token);
        return decodedToken as IUsuario;
      }
      return null;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }



  obterTokenUsuario(): string | null {
    return localStorage.getItem('token');
  }

  get isUsuarioAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

}


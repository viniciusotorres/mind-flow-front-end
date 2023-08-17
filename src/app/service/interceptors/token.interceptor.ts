
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usuarioService.obterTokenUsuario;
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.apiUrl.split('/');

    if (token && requestUrl[2] === apiUrl[2]) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          token: `${token}`
        }
      });
      return next.handle(request).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.usuarioService.deslogar;
          }
          return throwError(error.message); // Certifique-se de sempre retornar um Observable
        })
      );
    } else {
      return next.handle(request);
    }
  }
}

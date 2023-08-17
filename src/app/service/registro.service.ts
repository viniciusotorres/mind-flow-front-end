import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000'; // URL da API fake

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post(url, usuario);
  }
}

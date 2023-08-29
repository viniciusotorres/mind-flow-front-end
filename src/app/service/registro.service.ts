import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUsuario} from "../interfaces/IUsuario";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: IUsuario): Observable<any> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post(url, usuario);
  }
}

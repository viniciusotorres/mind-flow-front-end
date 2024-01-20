import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

// ...

@Injectable({
  providedIn: 'root'
})
export class SeuServico {

  private apiUrl = 'http://localhost:8080'; // Atualize com o endereço do seu backend

  constructor(private http: HttpClient) { }

  getDados() {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }
  enviarDados(dados: any) {
    return this.http.post(`${this.apiUrl}/endpoint`, dados);
  }
}

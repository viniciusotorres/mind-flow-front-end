import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MindFlowService } from 'src/app/services/mind-flow.service';
import { Perfil } from './Perfil';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  perfil: Perfil = {
    id: 0,
    nomeCompleto: '',
    email: '',
    senha: '',

  };

  constructor(
    private http: HttpClient,
    private service: MindFlowService,
    private router: Router
  ) {}

  cadastrarPerfil() {
    console.log(this.perfil);

    this.service.cadastrar(this.perfil).subscribe(() => {
      console.log('Perfil cadastrado com sucesso!');
      this.router.navigate(['/login']);
    });
  }
}

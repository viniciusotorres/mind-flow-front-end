import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioLogado: any;
  darkTheme = false;

  constructor(private perfilService: PerfilService,
              private usuarioService: UsuarioService,
              private renderer: Renderer2) {}

  ngOnInit() {
    this.perfilService.obterUsuarioLogado().subscribe(response => {
      this.usuarioLogado = response
    });
    console.log('Usuário logado:', this.usuarioLogado);
  }

  salvarPerfil() {
    this.perfilService.atualizarPerfil(this.usuarioLogado).subscribe(
      usuarioAtualizado => {
        console.log('Perfil atualizado:', usuarioAtualizado);
      },
      error => {
        console.error('Erro ao atualizar perfil:', error);
      }
    );
  }
  deslogar() {
    this.usuarioService.deslogar();
  }




}

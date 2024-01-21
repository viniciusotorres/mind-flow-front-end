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
  usuarioLogado: any

  constructor(private usuarioService: UsuarioService) {
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado();
  }

  ngOnInit() {
  }








}

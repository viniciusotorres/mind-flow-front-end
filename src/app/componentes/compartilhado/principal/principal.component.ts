import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogado: any;

  constructor(private usuarioService: UsuarioService,) {
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado();
    console.log(this.usuarioLogado)
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.usuarioService.deslogar();
  }


}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogado: any;
  darkTheme = false;

  constructor(private usuarioService: UsuarioService,
              private renderer: Renderer2) {
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado();
    console.log(this.usuarioLogado)
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.usuarioService.deslogar();
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    const body = this.renderer.selectRootElement('body');

    if (this.darkTheme) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }
}

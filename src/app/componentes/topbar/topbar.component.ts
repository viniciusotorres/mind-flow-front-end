import { Component } from '@angular/core';

import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  usuarioLogado: any;
  constructor(private usuarioService: UsuarioService,
              ) {
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado();
    console.log(this.usuarioLogado)
  }


  ngOnInit(): void {

  }



  deslogar() {
    this.usuarioService.deslogar();
    this.usuarioLogado = null;
  }
}

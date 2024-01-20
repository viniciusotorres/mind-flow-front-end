import {Component, OnInit} from '@angular/core';

import { UsuarioService } from 'src/app/service/usuario.service';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {IUsuario} from "../../interfaces/IUsuario";
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{
  isUsuarioLogado: boolean = false;
  usuarioLogado: any;
  emailUsuarioLogado: string | null = null;

  private autenticacaoSubject = new BehaviorSubject<boolean>(false);
  autenticacaoObservable: Observable<boolean> = this.autenticacaoSubject.asObservable();
  constructor(private usuarioService: UsuarioService, private router: Router, private ngZone: NgZone) {
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado();
  }


  ngOnInit(): void {
  }

  deslogar() {
    this.usuarioService.deslogar();
    this.usuarioLogado = null;
  }
}

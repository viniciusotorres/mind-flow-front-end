import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../service/usuario.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogado: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.usuarioService.isUsuarioAutenticado) {
      this.router.navigate(['/perfil']);
    }
  }

  realizarLogin(){
    this.usuarioLogado.markAllAsTouched();
    if (this.usuarioLogado.valid) {
      const usuario: IUsuario = {
        email: this.usuarioLogado.get('email')?.value,
        senha: this.usuarioLogado.get('senha')?.value
      };

      this.usuarioService.login(usuario).subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          this.snackBar.open(data.message, 'Fechar', { duration: 3000 });
        },
        (error) => {
          if (error.status === 401){
            this.snackBar.open('Usuário Não Registrado', 'Fechar', {duration: 3000});
          } else{
          this.snackBar.open('Erro ao fazer login', 'Fechar', { duration: 300 });
        }}
      );
    }
  }
}

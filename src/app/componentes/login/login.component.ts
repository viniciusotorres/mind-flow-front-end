import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.formBuilder.group({
    nomeCompleto: ['', []],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  logar() {
    if (this.formLogin.invalid) {
      return;
    }

    const usuario = this.formLogin.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario).subscribe((response) => {
      if (response.sucesso) {
        this.snackBar.open('Login bem-sucedido', 'Fechar', {
          duration: 3000
        });
        // Redirecionar para a página após o login bem-sucedido (você pode ajustar isso)
      } else {
        this.snackBar.open(
          'Falha na autenticação',
          'Usuário ou senha incorretos.',
          {
            duration: 3000
          }
        );
      }
    });
  }
}

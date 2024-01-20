import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from "../../service/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private snackBar: MatSnackBar) {
    this.formulario = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      enderecoPessoal: ['', Validators.required]
    });
  }

  realizarRegistro() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      const novoUsuario = this.formulario.value;
      this.usuarioService.registrarUsuario(novoUsuario).subscribe(
        (response) => {
          this.snackBar.open('Usuário registrado!', 'Fechar', { duration: 3000 });
          console.log('Resposta do registro:', response);
          this.formulario.reset();
        },
        (error) => {
          console.error('Erro durante o registro:', error);
        }
      );
    } else {
      this.snackBar.open('Por favor, preencha todos os campos do registro.','Fechar', {duration: 1500});
      console.error('Por favor, preencha todos os campos do formulário corretamente.');
    }
  }
}

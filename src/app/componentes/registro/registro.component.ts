import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formRegister: FormGroup; //


  constructor(private formBuilder: FormBuilder,
    private registroService: RegistroService,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', Validators.required],
      endereco: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  registrar() {
    if (this.formRegister.invalid) {
      return;
    }

    this.registroService.registrarUsuario(this.formRegister.value).subscribe(
      (response) => {
        this.snackBar.open('Usuário Registrado com sucesso!', 'Fechar', {
          duration: 3000
        })
        console.log('Usuário registrado com sucesso:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.snackBar.open('Usuário não foi registrado!', 'Fechar', {
          duration: 3000
        } )
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }
}

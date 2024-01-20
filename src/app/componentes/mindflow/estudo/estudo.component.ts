import { UsuarioMockService } from './../../../service/usuario-mock.service';
import { ITarefa } from './../../../interfaces/ITarefa';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { PerfilService } from 'src/app/service/perfil.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css'],
})
export class EstudoComponent implements OnInit {

  tarefa: ITarefa = {
    id: 0,
    descricao: '',
    prioridade: '',
    concluido: false
  };

  tarefasUsuario: ITarefa[] = [];
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  porcentagemTarefas: number = 0;

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private usuarioMockService: UsuarioMockService
  ) {}

  ngOnInit(): void {
    this.buscarTarefasUsuario();
  }

  adicionarTarefa() {
    this.http.post('http://localhost:3000/tarefasEstudos', this.tarefa).subscribe(
      (response: any) => {
        console.log('Tarefa Adicionada', response);
        this.buscarTarefasUsuario();
      },
      (error: any) => console.error('Erro ao adicionar tarefa:', error)
    );
  }

  buscarTarefasUsuario() {
    this.http
      .get(
        'http://localhost:3000/tarefasEstudos?idUsuario=' +
          this.usuarioService.obterUsuarioLogado()
      )
      .subscribe(
        (response: any) => {
          this.tarefasUsuario = response;
          console.log('Tarefa Adicionada', response);
        },
        (error: any) => console.error('Erro ao adicionar tarefa:', error),
        () => {
          const tarefasConcluidas = this.tarefasUsuario.filter(
            (t) => t.concluido
          );
          this.porcentagemTarefas =
            (tarefasConcluidas.length / this.tarefasUsuario.length) * 100;
        }
      );
  }

  checkboxChange(tarefa: ITarefa) {
    tarefa.concluido = true;

    this.http
      .put(`http://localhost:3000/tarefasEstudos/${tarefa.id}`, tarefa)
      .subscribe(
        () => {
          console.log('Tarefa Atualizada');
        },
        (error: any) => {
          console.error('Erro ao atualizar.');
        }
      ),
      this.buscarTarefasUsuario();

    console.log('Tarefa passada no método', tarefa);
    console.log('tarefasConcluidas', tarefa);
  }



  excluirTarefa(tarefa: any) {
    const index = this.tarefasUsuario.indexOf(tarefa);
    if (index !== -1) this.tarefasUsuario.splice(index, 1);

    fetch(`http://localhost:3000/tarefasEstudos/${tarefa.id}`, {
      method: 'DELETE',
    }).then((Response) => {
      if (Response.ok) {
        console.log('Tarefa excluida com sucesso!');
      } else {
        console.error('Erro ao excluir!');
      }
    }),
      this.buscarTarefasUsuario();
  }
  getSpinnerColor(prioridade: string): string {
    switch (prioridade) {
      case 'BAIXA':
        return 'blue';
      case 'MÉDIA':
        return 'green';
      case 'ALTA':
        return 'red';
      default:
        return '';
    }
  }
}

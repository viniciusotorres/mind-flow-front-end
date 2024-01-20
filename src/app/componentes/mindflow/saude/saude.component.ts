import { Component } from '@angular/core';
import {ITarefa} from "../../../interfaces/ITarefa";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../../service/usuario.service";
import {UsuarioMockService} from "../../../service/usuario-mock.service";

@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent {

  tarefa: ITarefa = {
    id: 0,
    descricao: '',
    prioridade: '',
    concluido: false,
  };

  tarefasSaude: ITarefa[] = [];
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
    this.http.post('http://localhost:3000/tarefasSaude', this.tarefa).subscribe(
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
        'http://localhost:3000/tarefasSaude?idUsuario='

      )
      .subscribe(
        (response: any) => {
          this.tarefasSaude = response;
          console.log('Tarefa Adicionada', response);
        },
        (error: any) => console.error('Erro ao adicionar tarefa:', error),
        () => {
          const tarefasConcluidas = this.tarefasSaude.filter(
            (t) => t.concluido
          );
          this.porcentagemTarefas =
            (tarefasConcluidas.length / this.tarefasSaude.length) * 100;
        }
      );
  }

  checkboxChange(tarefa: ITarefa) {
    tarefa.concluido = true;

    this.http
      .put(`http://localhost:3000/tarefasSaude/${tarefa.id}`, tarefa)
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
    const index = this.tarefasSaude.indexOf(tarefa);
    if (index !== -1) this.tarefasSaude.splice(index, 1);

    fetch(`http://localhost:3000/tarefasSaude/${tarefa.id}`, {
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

import { DatePipe } from "@angular/common";

export interface ITarefa {
  id: number;
  idUsuario?: number
  descricao: string;
  prioridade: string;
  concluido: boolean;
}

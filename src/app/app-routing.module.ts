import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/compartilhado/principal/principal.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioNaoAutenticadoGuard } from './service/guard/usuario-n-autenticado.guard';
import { UsuarioAutenticadoGuard } from './service/guard/usuario-autenticado.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MindflowComponent } from './componentes/mindflow/mindflow.component';
import { EstudoComponent } from './componentes/mindflow/estudo/estudo.component';
import { SaudeComponent } from './componentes/mindflow/saude/saude.component';
import { EspiritualComponent } from './componentes/mindflow/espiritual/espiritual.component';
import {EditarPerfilComponent} from "./componentes/perfil/editar-perfil/editar-perfil.component";
import {NovoMindComponent} from "./componentes/mindflow/novo-mind/novo-mind/novo-mind.component";
import {PremiosComponent} from "./componentes/premios/premios.component";

const routes: Routes = [
  {
    path: 'mind-estudo',
    component: EstudoComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent,

  },
  {
    path: 'mind',
    component: MindflowComponent,
  },
  {
    path: 'mind-saude',
    component: SaudeComponent,

  },
  {
    path: 'mind-espiritual',
    component: EspiritualComponent,

  },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/compartilhado/principal/principal.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioNaoAutenticadoGuard } from './service/guard/usuario-n-autenticado.guard';
import { UsuarioAutenticadoGuard } from './service/guard/usuario-autenticado.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {
    path: '', component: PrincipalComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: HomeComponent }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

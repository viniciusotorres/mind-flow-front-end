import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ou
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import{ HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FieldsetModule } from 'primeng/fieldset';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';
import { BadgeModule } from 'primeng/badge';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PrincipalComponent } from './componentes/compartilhado/principal/principal.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './service/interceptors/token.interceptor';
import { RegistroComponent } from './componentes/registro/registro.component';
import {MatMenuModule} from '@angular/material/menu';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import { MindflowComponent } from './componentes/mindflow/mindflow.component';
import { EstudoComponent } from './componentes/mindflow/estudo/estudo.component';
import { SaudeComponent } from './componentes/mindflow/saude/saude.component';
import { EspiritualComponent } from './componentes/mindflow/espiritual/espiritual.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { EditarPerfilComponent } from './componentes/perfil/editar-perfil/editar-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent,
    RegistroComponent,
    PerfilComponent,
    TopbarComponent,
    MindflowComponent,
    EstudoComponent,
    SaudeComponent,
    EspiritualComponent,
    EditarPerfilComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
    FieldsetModule,
    CheckboxModule,
    AvatarModule,
    SidebarModule,
    MegaMenuModule,
    InputTextareaModule,
    BadgeModule,
    ChipModule,
    ChipsModule,
    TagModule,
    MultiSelectModule,
    ProgressBarModule,
    ToastModule,
    MessagesModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule,
    FormsModule,
    MatTooltipModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule




  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

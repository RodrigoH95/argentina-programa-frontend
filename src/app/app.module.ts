import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormularioExperienciaComponent } from './componentes/experiencia/formulario-experiencia.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioEducacionComponent } from './componentes/educacion/formulario-educacion.component';
import { FormularioProyectoComponent } from './componentes/proyectos/formulario-proyecto.component';
import { FormularioAcercadeComponent } from './componentes/acerca-de/formulario-acercade.component';
import { FormularioHabilidadesComponent } from './componentes/aptitudes/formulario-habilidades.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/portfolio-interceptor.service';
import { SpinnerComponent } from './componentes/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AcercaDeComponent,
    EducacionComponent,
    AptitudesComponent,
    ProyectosComponent,
    ExperienciaComponent,
    FormularioExperienciaComponent,
    InicioComponent,
    FormularioEducacionComponent,
    FormularioProyectoComponent,
    FormularioAcercadeComponent,
    FormularioHabilidadesComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

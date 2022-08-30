import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioExperienciaComponent } from './componentes/experiencia/formulario-experiencia.component';
import { FormularioEducacionComponent } from './componentes/educacion/formulario-educacion.component';
import { FormularioProyectoComponent } from './componentes/proyectos/formulario-proyecto.component';
import { FormularioAcercadeComponent } from './componentes/acerca-de/formulario-acercade.component';
import { FormularioHabilidadesComponent } from './componentes/aptitudes/formulario-habilidades.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { PortfolioGuardService as guard } from './guards/portfolio-guard.service';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent },
  {path: 'formulario-experiencia', component: FormularioExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path: 'formulario-educacion', component: FormularioEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path: 'formulario-proyectos', component: FormularioProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'formulario-acercade', component: FormularioAcercadeComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'formulario-habilidades', component: FormularioHabilidadesComponent, canActivate: [guard], data: { expectedRol: ['admin'] }}


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

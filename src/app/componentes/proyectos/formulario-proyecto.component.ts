import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './formulario-proyecto.component.html',
  styleUrls: ['./formulario-proyecto.component.css'],
})
export class FormularioProyectoComponent implements OnInit {
  title = 'Añadir';
  id?: number;
  tituloProyecto = '';
  descProyecto = '';
  urlProyecto = '';
  imgProyecto = '';

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (params) => (this.id = params['idProyecto'])
    );
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar';
      this.proyectosService.findProyecto(this.id).subscribe((d) => {
        this.tituloProyecto = d.tituloProyecto;
        this.descProyecto = d.descProyecto;
        this.urlProyecto = d.urlProyecto;
        this.imgProyecto = d.imgProyecto;
      });
    }
  }

  onCreate(): void {
    let proyecto: Proyecto;
    proyecto = {
      tituloProyecto: this.tituloProyecto,
      descProyecto: this.descProyecto,
      urlProyecto: this.urlProyecto,
      imgProyecto: this.imgProyecto,
    };

    if (!this.id) {
      this.proyectosService.saveProyecto(proyecto).subscribe(
        (data) => {
          alert('Proyecto añadido');
          this.router.navigate(['']);
        },
        (err) => {
          console.log(err);
          alert('No se pudo agregar el proyecto');
          this.router.navigate(['']);
        }
      );
    } else {
      this.proyectosService.editProyecto(this.id, proyecto).subscribe(() => {
        alert("Proyecto editado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar el proyecto.");
        this.router.navigate(['']);
      });
    }
  }
}

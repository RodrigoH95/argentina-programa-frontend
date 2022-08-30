import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-formulario-habilidades',
  templateUrl: './formulario-habilidades.component.html',
  styleUrls: ['./formulario-habilidades.component.css']
})
export class FormularioHabilidadesComponent implements OnInit {
  title = "Añadir"
  id?: number;
  nombreHab = "";
  categoria = "";
  porcentaje = 0;
  imagenHab = "";

  constructor(private habService: HabilidadesService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params["idHab"]
      // Busca en url si existe la categoria SOFT/HARD
      if(params["cat"]) {
        this.categoria = params["cat"];
      }
    });
   }

  ngOnInit(): void {
    // Si id existe la habilidad ya se creó y cargará el formulario para editar
    if(this.id) {
      this.title = "Editar";
      this.habService.findHabilidad(this.id).subscribe(d => {
        this.nombreHab = d.nombreHab;
        this.categoria = d.categoria;
        this.porcentaje = d.porcentaje;
        this.imagenHab = d.imagenHab;
      })
    }
  }

  onCreate(): void {
    let hab: Habilidades;
    hab = {
      nombreHab: this.nombreHab,
      categoria: this.categoria,
      porcentaje: this.porcentaje,
      imagenHab: this.imagenHab
    }

    // si id no existe -> crear nueva habilidad | else -> editar previa
    if(!this.id) {
      this.habService.saveHabilidad(hab).subscribe(() => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo añadir habilidad.");
        this.router.navigate(['']);
      });
    } else {
      this.habService.editHabilidad(this.id, hab).subscribe(() => {
        alert("Habilidad editada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Habilidad no se pudo editar.");
        this.router.navigate(['']);
      })
    }
  }



}

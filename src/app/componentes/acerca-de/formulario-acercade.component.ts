import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-formulario-acercade',
  templateUrl: './formulario-acercade.component.html',
  styleUrls: ['./formulario-acercade.component.css'],
})
export class FormularioAcercadeComponent implements OnInit {
  id?: number;
  nombre = '';
  apellido = '';
  titulo = '';
  descripcion = '';
  img = '';
  imgBanner = '';

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    if (this.id) {
      this.personaService.getPersona().subscribe((d) => {
        this.nombre = d.nombre;
        this.apellido = d.apellido;
        this.titulo = d.titulo;
        this.descripcion = d.descripcion;
        this.img = d.img;
        this.imgBanner = d.imgBanner;
      });
    }
  }

  onCreate(): void {
    let persona: Persona;
    persona = {
      nombre: this.nombre,
      apellido: this.apellido,
      titulo: this.titulo,
      descripcion: this.descripcion,
      img: this.img,
      imgBanner: this.imgBanner,
    };

    if (this.id) {
      this.personaService.editPersona(this.id, persona).subscribe(() => {
        alert("Perfil editado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Hubo un error editando el perfil");
        this.router.navigate(['']);
      });
    }
  }
}

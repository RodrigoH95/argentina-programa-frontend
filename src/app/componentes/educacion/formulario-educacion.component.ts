import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.css']
})
export class FormularioEducacionComponent implements OnInit {
  title = "Añadir";
  id?: number;
  nombreEdu = "";
  descEdu = "";
  inicioEdu = "";
  finEdu = "";
  imagenEdu = "";

  constructor(private eduService: EducacionService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => this.id = params["idEdu"]);
  }

  ngOnInit(): void {
    if(this.id) {
      this.title = "Editar";
      this.eduService.findEducacion(this.id).subscribe(d => {
        this.nombreEdu = d.nombreEdu;
        this.descEdu = d.descEdu;
        this.inicioEdu = d.inicioEdu;
        this.finEdu = d.finEdu;
        this.imagenEdu = d.imagenEdu;
      });
    }
  }

  onCreate(): void {
    let edu: Educacion;
    edu = {
      nombreEdu: this.nombreEdu,
      descEdu: this.descEdu,
      inicioEdu: this.inicioEdu,
      finEdu: this.finEdu,
      imagenEdu: this.imagenEdu
    };

    if(!this.id) {
      this.eduService.saveEducacion(edu).subscribe(() => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo añadir educación.");
        this.router.navigate(['']);
      });
    } else {
      this.eduService.editEducacion(this.id, edu).subscribe(() => {
        alert("Educacion editada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar educación");
        this.router.navigate(['']);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.css']
})
export class FormularioExperienciaComponent implements OnInit {
  title = "Añadir";
  id?: number;
  nombreExp = "";
  descExp = "";
  inicioExp = "";
  finExp = "";
  imagenExp = "";

  constructor(private expService: ExperienciaService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => this.id = params["idExp"]);
   }

  ngOnInit(): void {
    if(this.id) {
      this.title = "Editar";
      this.expService.findExperiencia(this.id).subscribe(d => {
        this.nombreExp = d.nombreExp;
        this.descExp = d.descExp;
        this.inicioExp = d.inicioExp;
        this.finExp = d.finExp;
        this.imagenExp = d.imagenExp;
      });
    }
  }

  onCreate(): void {
    let exp: Experiencia;
    exp = {
      nombreExp: this.nombreExp,
      descExp: this.descExp,
      inicioExp: this.inicioExp,
      finExp: this.finExp,
      imagenExp: this.imagenExp
    };
    console.log("exp id", this.id);
    if(!this.id) {
      this.expService.saveExperiencia(exp).subscribe(data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        alert("No se pudo añadir la experiencia.");
        this.router.navigate(['']);
      });
    } else {
      this.expService.editExperiencia(this.id, exp).subscribe(() => {
        alert("Experiencia editada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar experiencia");
        this.router.navigate(['']);
      })
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia : Experiencia[] | undefined;
  @Input() isAdmin!: boolean;
  
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencia()
  }

  getExperiencia() {
    return this.experienciaService.getExperiencia().subscribe(data => this.experiencia = data);
  }

  deleteExperiencia(id: any) {
    if(confirm("Confirmar eliminación del elemento:")) {
      return this.experienciaService.deleteExperiencia(id).subscribe(() => this.getExperiencia());
    }

    return null;
  }

}

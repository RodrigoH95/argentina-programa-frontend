import { Component, Input, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  hardSkills: Habilidades[] | undefined;
  softSkills: Habilidades[] | undefined;
  @Input() isAdmin!: boolean;

  constructor(public habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    this.getHabilidades();
  }

  getHabilidades() {
    this.habilidadesService.getHabilidades().subscribe(data => {
      this.hardSkills = data.filter(hab => hab.categoria == "HARD");
      this.softSkills = data.filter(hab => hab.categoria == "SOFT");
    })
  }

  deleteHabilidad(id: any) {
    if(confirm("Confirmar eliminación del elemento:")) {
      this.habilidadesService.deleteHabilidad(id).subscribe(() => this.getHabilidades());
    }
  }

}

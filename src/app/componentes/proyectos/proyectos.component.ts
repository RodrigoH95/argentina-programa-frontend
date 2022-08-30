import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] | undefined;
  @Input() isAdmin!: boolean;

  constructor(public proyectosService : ProyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos() {
    this.proyectosService.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }

  deleteProyecto(id: any) {
    if(confirm("Confirmar eliminación del elemento:")) {
      this.proyectosService.deleteProyecto(id).subscribe(() => this.getProyectos());
    }
  }

}

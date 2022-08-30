import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] | undefined;
  @Input() isAdmin!: boolean;
  constructor(public educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion() {
    this.educacionService.getEducacion().subscribe(data => this.educacion = data);
  }

  public deleteEducacion(id: any) {
    if(confirm("Confirmar eliminación del elemento:")) {
      this.educacionService.deleteEducacion(id).subscribe(() => this.getEducacion());
    }   
  }

}


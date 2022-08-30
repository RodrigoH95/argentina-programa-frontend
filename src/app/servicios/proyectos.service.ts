import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {  
  private apiServerURL = environment.apiBaseURL;
  
  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerURL}/personas/proyectos`);
  }

  findProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.apiServerURL}/personas/proyectos/${id}`);
  }

  saveProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServerURL}/personas/crear-proyecto`, proyecto);
  }

  editProyecto(id: number, proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<any>(`${this.apiServerURL}/personas/editar-proyecto/${id}`, proyecto);
  }

  deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.apiServerURL}/personas/eliminar-proyecto/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerURL = environment.apiBaseURL;

  constructor(private http : HttpClient) { }

  getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerURL}/personas/educacion`);
  }

  findEducacion(id: any): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.apiServerURL}/personas/educacion/${id}`);
  }

  saveEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiServerURL}/personas/crear-educacion`, educacion);
  }

  editEducacion(id: number, educacion: Educacion): Observable<Educacion> {
    return this.http.put<any>(`${this.apiServerURL}/personas/editar-educacion/${id}`, educacion);
  }

  deleteEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.apiServerURL}/personas/eliminar-educacion/${id}`);
  }
}

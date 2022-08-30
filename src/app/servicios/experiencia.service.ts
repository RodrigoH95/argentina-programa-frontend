import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerURL = environment.apiBaseURL; 

  constructor(private http: HttpClient) { }

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerURL}/personas/experiencia`);
  }

  findExperiencia(id: any): Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerURL}/personas/experiencia/${id}`);
  }

  saveExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiServerURL}/personas/crear-experiencia`, experiencia);
  }

  editExperiencia(id: number, exp: Experiencia): Observable<Experiencia> {
    return this.http.put<any>(`${this.apiServerURL}/personas/editar-experiencia/${id}`, exp);
  }

  deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(`${this.apiServerURL}/personas/eliminar-experiencia/${id}`);
  }
}

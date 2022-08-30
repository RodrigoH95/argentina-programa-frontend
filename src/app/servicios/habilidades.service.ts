import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiServerURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  getHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.apiServerURL + `/personas/habilidades`);
  }

  findHabilidad(id: number): Observable<Habilidades> {
    return this.http.get<Habilidades>(this.apiServerURL + `/personas/habilidades/${id}`);
  }

  saveHabilidad(habilidad: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(this.apiServerURL + `/personas/crear-habilidad`, habilidad);
  }

  editHabilidad(id: number, habilidad: Habilidades): Observable<Habilidades> {
    return this.http.put<any>(this.apiServerURL + `/personas/editar-habilidad/${id}`, habilidad);
  }

  deleteHabilidad(id: number): Observable<Habilidades> {
    return this.http.delete<Habilidades>(this.apiServerURL + `/personas/eliminar-habilidad/${id}`);
  }
}

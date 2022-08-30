import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerURL = environment.apiBaseURL;

  constructor(private http : HttpClient) { }

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerURL}/personas/perfil/1`);
  }

  editPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<any>(`${this.apiServerURL}/personas/editar-persona/${id}`, persona);
  }

  savePersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServerURL}/personas/crear-persona`, persona);
  }

  deletePersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.apiServerURL}/personas/eliminar-persona/${id}`);
  }
}

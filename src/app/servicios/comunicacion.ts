import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  // Cambios enviados desde el Componente 1 o sea la barra de interacción
  private tituloSource = new BehaviorSubject<string>("Inicio");
  private opcionesSource = new BehaviorSubject<string[]>(["Opción 1", "Opción 2", "Opción 3"]);

  tituloActual = this.tituloSource.asObservable();
  opcionesActuales = this.opcionesSource.asObservable();

  actualizarDatos(titulo: string, opciones: string[]) {
    this.tituloSource.next(titulo);
    this.opcionesSource.next(opciones);
  }

}

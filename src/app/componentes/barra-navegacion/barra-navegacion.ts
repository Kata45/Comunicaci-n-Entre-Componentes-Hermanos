import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../servicios/comunicacion';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './barra-navegacion.html',
  styleUrl: './barra-navegacion.scss'
})
export class BarraNavegacionComponent {

  titulo = "";
  opciones: string[] = [];
  seleccion = "";

  constructor(private comunicacion: ComunicacionService, private router: Router) {
    this.comunicacion.tituloActual.subscribe(t => this.titulo = t);
    this.comunicacion.opcionesActuales.subscribe(o => this.opciones = o);
  }

  navegar(opcion: string, index: number) {
    this.seleccion = opcion;

    if (index === 0) this.router.navigate(['/pagina-a']);
    else if (index === 1) this.router.navigate(['/pagina-b']);
    else if (index === 2) this.router.navigate(['/pagina-c']);
  }

}

import { Component } from '@angular/core';
import { ComunicacionService } from '../../servicios/comunicacion';

@Component({
  selector: 'app-barra-interaccion',
  standalone: true,
  templateUrl: './barra-interaccion.html',
  styleUrl: './barra-interaccion.scss'
})
export class BarraInteraccionComponent {

  botonSeleccionado: number = 1;

  constructor(private comunicacion: ComunicacionService) {}

  enviarDatos(num: number) {
    this.botonSeleccionado = num;

    if (num === 1) {
      this.comunicacion.actualizarDatos(
        "Módulo Principal",
        ["Inicio", "Usuarios", "Reportes", "Ajustes", "Acerca de"]
      );
    }

    if (num === 2) {
      this.comunicacion.actualizarDatos(
        "Panel Administrativo",
        ["Dashboard", "Empleados", "Nomina", "Inventario", "Salir"]
      );
    }

    if (num === 3) {
      this.comunicacion.actualizarDatos(
        "Herramientas",
        ["Calculadora", "Conversor", "Notas", "Calendario", "Registros"]
      );
    }
  }
}

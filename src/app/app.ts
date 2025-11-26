import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraInteraccionComponent } from "./componentes/barra-interaccion/barra-interaccion";
import { BarraNavegacionComponent } from "./componentes/barra-navegacion/barra-navegacion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraInteraccionComponent, BarraNavegacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ComunicacionEntreComponente');
}

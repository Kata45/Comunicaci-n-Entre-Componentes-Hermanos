import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pagina-a',
  standalone: true,
  imports: [],
  templateUrl: './pagina-a.html',
  styleUrl: './pagina-a.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaA {

}

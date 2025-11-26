import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pagina-b',
  standalone: true,
  imports: [],
  templateUrl: './pagina-b.html',
  styleUrl: './pagina-b.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaB {

}

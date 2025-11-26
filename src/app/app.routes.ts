import { Routes } from '@angular/router';
import { PaginaA } from './componentes/pagina-a/pagina-a';
import { PaginaB } from './componentes/pagina-b/pagina-b';
import { PaginaC } from './componentes/pagina-c/pagina-c';

export const routes: Routes = [
  { path: 'pagina-a', component: PaginaA },
  { path: 'pagina-b', component: PaginaB },
  { path: 'pagina-c', component: PaginaC },
  { path: '', redirectTo: 'pagina-a', pathMatch: 'full'}
];

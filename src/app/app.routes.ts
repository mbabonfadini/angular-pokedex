import { Routes } from '@angular/router';
import { OnboardFComponent } from './views/onboard-f/onboard-f.component';
import { OnboardSComponent } from './views/onboard-s/onboard-s.component';
import { PgInicialAcessoComponent } from './views/pg-inicial-acesso/pg-inicial-acesso.component';

export const routes: Routes = [
  {
    path: '',
    component: OnboardFComponent,
    pathMatch: 'full',
  },
  { path: 's', component: OnboardSComponent },
  { path: 'pagina-de-acesso', component: PgInicialAcessoComponent },
];

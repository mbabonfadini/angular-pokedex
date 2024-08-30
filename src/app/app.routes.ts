import { Routes } from '@angular/router';
import { OnboardFComponent } from './views/onboard-f/onboard-f.component';
import { OnboardSComponent } from './views/onboard-s/onboard-s.component';
import { PgInicialAcessoComponent } from './views/pg-inicial-acesso/pg-inicial-acesso.component';
import { LoginClienteComponent } from './views/login-cliente/login-cliente.component';
import { RegioesComponent } from './views/regioes/regioes.component';

export const routes: Routes = [
  {
    path: '',
    component: OnboardFComponent,
    pathMatch: 'full',
  },
  { path: 's', component: OnboardSComponent },
  { path: 'pagina-de-acesso', component: PgInicialAcessoComponent },
  { path: 'login-cliente', component: LoginClienteComponent },
  { path: 'regioes', component: RegioesComponent },


];

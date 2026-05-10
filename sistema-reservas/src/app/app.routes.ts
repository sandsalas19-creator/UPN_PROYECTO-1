import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { PerfilAccesibilidadComponent } from './perfil-accesibilidad/perfil-accesibilidad';
import { MapaComponent } from './mapa/mapa';
import { ReservaAsientos } from './reserva-asientos/reserva-asientos';
import { RegistroComponent } from './registro/registro';

import { ReservarSala } from './reservar-sala/reservar-sala';
import { MisReservas } from './mis-reservas/mis-reservas';

/* ===== IMPORTAR COMPONENTE ===== */
import { ReportarIncidencias } from './reportar-incidencias/reportar-incidencias';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registro',
    component: RegistroComponent
  },

  {
    path: 'perfil',
    component: PerfilAccesibilidadComponent
  },

  {
    path: 'mapa',
    component: MapaComponent
  },

  {
    path: 'reservas',
    component: ReservaAsientos
  },

  {
    path: 'reservar-sala',
    component: ReservarSala
  },

  {
    path: 'mis-reservas',
    component: MisReservas
  },

  /* ===== NUEVA RUTA ===== */

  {
    path: 'reportar-incidencias',
    component: ReportarIncidencias
  }

];
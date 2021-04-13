import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// modulo personalizado de Rutas Hijas
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  // indicaciones de rutas tomadas:
  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // path de rutas por defecto
  // { path: '**', component: NopagefoundComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PagesRoutingModule, // modulo de rutas hijas para las Paginas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

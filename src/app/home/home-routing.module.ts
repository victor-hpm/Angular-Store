import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ----
import { HomeComponent } from './components/home/home.component';

// NgModule es un decorador que tiene metadata,
// esta metadata que le tenemos que colacar son las rutas
// enconces crearemos una constante llamada routes que va
// a estar tipada de tipo Routes
const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}

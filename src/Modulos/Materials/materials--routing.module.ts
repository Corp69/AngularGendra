import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionesComponent } from './Home/ubicaciones/ubicaciones.component';
import { HomeComponent } from './Home/Home.component';

/**
 * @routes => agregamos los paths de nuestros componentes por lazyload mi componente principal será Home
 * @homeComponent => mi pagina principal donde almacena mi router-outlet
 * @children => agregamos los paths que se cargarán en el url de navegador mostrando los componenestes configurados.
 * @redirectTo => si rompemos un path redireccionamos a ubicaciones limitando la navegación
 * 
 * */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'ubicaciones', component: UbicacionesComponent },
      { path: '**', redirectTo: 'ubicaciones' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }

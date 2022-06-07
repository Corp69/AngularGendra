import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  /**
   * @path : agregamos los path de los modulos a desarrollar en este caso la aplicacion por default un auth
   * @loadChildren : => utilizamos una carga perezosa para no cargar y saturar, esto hará que al cargar el modulo con el path
   *                    hasta no entrar no cargará el modulo optimizando mi portal.
  */
  
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )

  //========================================================================================================================================================================================================================//
  // comentamos estas lineas para no utilizar el JsonWEBtoken
  // _________________________________________________ 
  // canActivate: [ ValidarTokenGuard ],
  // canLoad: [ ValidarTokenGuard ]
  //========================================================================================================================================================================================================================//


  // },

  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: 'material',
    loadChildren: () => import('./Modulos/Materials/materials.module').then(m => m.MaterialsModule),
    //========================================================================================================================================================================================================================//
    // comentamos estas lineas para no utilizar el JsonWEBtoken
    // _________________________________________________ 
    // canActivate: [ ValidarTokenGuard ],
    // canLoad: [ ValidarTokenGuard ]
    //========================================================================================================================================================================================================================//
  },
  /**
   * @redirectTo : => realizamos la configración que siempre redireccione hacia ubicaciones limitamos los paths.
   * 
   * 
   */
  {
    path: '**',
    redirectTo: 'material/ubicaciones'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

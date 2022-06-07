import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsRoutingModule } from './materials--routing.module';
import { SharedModule } from '../Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/Home.component';
import { UbicacionesComponent } from './Home/ubicaciones/ubicaciones.component';
@NgModule({
  declarations: 
  [ 
    UbicacionesComponent, 
    HomeComponent
  ],

  exports:[
  /*********************************************************************** */
  /**
   * Agregar los componentes a exportar y utilizar en otro modulo
   * 
  /************************************************************************ */ 
  ],
  imports: [
    HttpClientModule,
    MaterialsRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  //===============================================================================================
  // La siguiente linea remueve los errores de sintaxis del los componentes web, en los archivos
  // html de cada componente. Esto para los componentes importados de terceros SyncFusion.
  //===============================================================================================
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  //===============================================================================================
})
export class MaterialsModule { }

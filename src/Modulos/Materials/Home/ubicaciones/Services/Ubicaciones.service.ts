import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/Modulos/Shared/errores.service';
import { MdlBuscar } from '../Models/MdlBuscar';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  constructor(private http: HttpClient,
    private errores: ErroresService) { }

  /**
   * 
   * @param modelo MdlBuscar este modelo lo tomamos como referencia del cual hacemos un filtrado para una mejor Expriencia al usuario
   * 
   * public _des: boolean = true;
   * public _long_: boolean = false;
   * public _featcode_: boolean = false;
   * public _contry_: boolean = false;
   * public _admin_: boolean = false;
   * public _filtro: String = "";
   * 
   * @returns Json Object: este sera enviado al api asu vez nos traerá un mismo Objeto como respuesta, que sera añadido a la variable data y mostrado en la tabla
   */
  public Buscar(modelo: MdlBuscar) {
    return this.http
      .post(`${environment.baseUrl}/publico/evaluaciones/LstBusquedaUbicacion`, modelo)
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }
}
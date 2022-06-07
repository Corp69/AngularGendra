import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  
  /**
   * @returns con este metodo devolvemos el usuario 
   * para que no tengamos problema con manipulacion externa
   */
  get usuario() {
    return { ...this._usuario };
  }


  constructor( private http: HttpClient ) { }

  registro( name: string, email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth/new`;
    const body = { email, password, name };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }
  /**
   * 
   * @param email este es un 
   * @param password 
   * @returns 
   */
  public login( email: string, password: string ) 
  {
    /**
     * sacamos la url y asignamos en url
     */
    const url  = `${ this.baseUrl }/auth`;
    const body = { email, password };
    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            console.log(resp);
            localStorage.setItem('token', resp.token! );
            localStorage.setItem('Usuario', resp.name! );
            localStorage.setItem('Correo', resp.email! );
          }
        }),
        map( resp => resp.ok ),
        /**
         * cachamos el error desde la api
         */
        catchError( err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    /**
     * sacamos el token del localstorange
     * `${environment.base_url}
     */
    const url = `${environment.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }

            return resp.ok;
          }),
          // catchError( err => of(false) )
          catchError( err => of(err.error.msg) )
        );

  }

  logout() {
    localStorage.clear();
  }


}

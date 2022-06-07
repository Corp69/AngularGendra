import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UbicacionesService } from './Services/Ubicaciones.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit {

  //****************************************************************** */
  //  formularios: formularios utilzados 
  public frmBuscar: FormGroup = new FormGroup({});
  //****************************************************************** */
  public data: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: UbicacionesService,
    private router: Router
  ) {
    //****************************************************************** */
    //*                 Formularios                                      */
    //****************************************************************** */
    // Formulario: frmBuscar
    /**
     * @form Formulario: frmBuscar => en base este formulario es como realizamos la acción de buscar.
     * 
     */
    this.frmBuscar = this.fb.group({
      _des: [true],
      _long_: [false],
      _featcode_: [false],
      _contry_: [false],
      _admin_: [false],
      _filtro: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
  }
  /**
   * @method click => ajusta y filtra por columnas Nombre, Ascii limita la busqueda
   * @param args extraemos los valores de los booleanos ejecutamos un if si es falso ejecutamos la misma instruccion, no se realiza cambio
   * en caso de ser true a todo el formulario los checkbox el resto queda en falso
   */
  public click(args: any) {
    if (args.target.checked = true) {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);

    }
    else {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);
    }
  }
  /**
   * @method clickCode => ajusta y filtra por columnas Latitud, Longitud, Elevación limita la busqueda
   * @param args extraemos los valores de los booleanos ejecutamos un if si es falso ejecutamos la misma instruccion, no se realiza cambio
   * en caso de ser true a todo el formulario los checkbox el resto queda en falso
   */
  public clickLong(args: any) {
    if (args.target.checked = true) {
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);

    }
    else {
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);
    }
  }
  /**
   * @method clickCode => ajusta y filtra por columnas Clase, Codigo, CC2 limita la busqueda
   * @param args extraemos los valores de los booleanos ejecutamos un if si es falso ejecutamos la misma instruccion, no se realiza cambio
   * en caso de ser true a todo el formulario los checkbox el resto queda en falso
   */
  public clickCode(args: any) {
    if (args.target.checked = true) {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);

    }
    else {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);
    }
  }
  /**
   * @method clickContry => ajusta y filtra por columnas TZ y fecha De modificacion limita la busqueda
   * @param args extraemos los valores de los booleanos ejecutamos un if si es falso ejecutamos la misma instruccion, no se realiza cambio
   * en caso de ser true a todo el formulario los checkbox el resto queda en falso
   */
  public clickContry(args: any) {
    if (args.target.checked = true) {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);

    }
    else {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);
      this.frmBuscar.controls['_admin_'].setValue(false);
    }
  }
  /**
   * @method clickAdmin => ajusta y filtra por columnas Admin limita la busqueda
   * @param args extraemos los valores de los booleanos ejecutamos un if si es falso ejecutamos la misma instruccion, no se realiza cambio
   * en caso de ser true a todo el formulario los checkbox el resto queda en falso
   */
  public clickAdmin(args: any) {
    if (args.target.checked = true) {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);

    }
    else {
      this.frmBuscar.controls['_long_'].setValue(false);
      this.frmBuscar.controls['_featcode_'].setValue(false);
      this.frmBuscar.controls['_contry_'].setValue(false);
      this.frmBuscar.controls['_des'].setValue(false);
    }
  }

  /**
   * 
   * @param args pasamos la la cadena de texto desde el html hacia el controller para activar la busqueda.
   */
  ngOnChanges(args: any): void {
    this.service.Buscar(this.frmBuscar.value).subscribe(
      resp => {
       this.data = JSON.parse(JSON.stringify(resp)).respuesta.dataSource;
      }
    );
  }
  }


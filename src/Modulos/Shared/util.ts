import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class util {
    /**
 * Funcion para obtener data del JSON y validar posible conversión a un objeto de tipo fecha
 * en javacript.
 * Se valida por medio de Expersión Regular qu cumpla con las posiciones de una estructura de fecha
 * 4 digitos = año
 * 2 digitos = mes
 * 2 digitos = dia
 * 2 digitos = horas
 * 2 digitos = minutos
 * 2 digitos = segundos
 * 
 * @param key Nombre de la estructura del dato
 * @param value Valor de la estructura del dato
 * @returns Si cumple con la condición se regreesa el Valor como objeto Date de lo contrario el Valor original
 */

    parseFecha = function (key: any, value: string | number | Date) {
        if (typeof value === "string" && new RegExp(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/).test(value)) {
            return new Date(value);
        }
        if (typeof value === "string" && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(value)) {
            return new Date(value);
        }
        if (typeof value === "string" && new RegExp(/^\d{2}:\d{2}:\d{2}$/).test(value)) {
            return new Date('1900-01-01T' + value);
        }
        return value;
    }
}

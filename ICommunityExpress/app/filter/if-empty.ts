import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'ifEmpty'})
export class IfEmptyPipe implements PipeTransform 
{
  transform(value: number): any 
  {
      
      if( value == undefined || value == 0)
      {
          return 'N/A';
      }

      return value;
  }
}

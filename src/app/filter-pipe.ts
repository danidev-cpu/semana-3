import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(eventos: any[], filtro: string): any[] {
    if (!filtro) return eventos;
    return eventos.filter((e) => e.nombre.toLowerCase().includes(filtro.toLowerCase()));
  }
}

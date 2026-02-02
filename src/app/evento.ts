import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  getEventos() {
    return [
      {
        nombre: 'Evento 1',
        descripcion: 'Descripción del evento 1',
        imagen: '/img/evento-1.jpg',
      },
      {
        nombre: 'Evento 2',
        descripcion: 'Descripción del evento 2',
        imagen: '/img/evento-2.jpg',
      },
    ];
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EventoService } from './evento';
import { EventoItem } from './evento-item/evento-item';
import { EventoAdd } from './evento-add/evento-add';
import { FilterPipe } from './filter-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, EventoItem, EventoAdd, FilterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  eventos: any[] = [];
  filtro: string = '';

  constructor(private eventoService: EventoService) {
    this.eventos = this.eventoService.getEventos();
  }

  deleteEvento(evento: any) {
    this.eventos = this.eventos.filter((e) => e !== evento);
  }

  addEvento(evento: any) {
    this.eventos = [...this.eventos, evento];
  }
}

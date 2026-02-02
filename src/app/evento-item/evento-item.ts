import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evento-item',
  imports: [],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
  host: { class: 'card' },
})
export class EventoItem {
  @Input() evento: any;
  @Output() delete = new EventEmitter<void>();

  deleteEvento() {
    this.delete.emit();
  }
}

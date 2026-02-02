import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Output() addEvento = new EventEmitter<any>();

  evento = {
    nombre: '',
    descripcion: '',
    imagen: '',
  };

  onSubmit() {
    this.addEvento.emit({ ...this.evento });
    this.evento = { nombre: '', descripcion: '', imagen: '' };
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.evento.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  @Output() especialidadSeleccionada = new EventEmitter<string>();

  seleccionar(especialidad: string){
    this.especialidadSeleccionada.emit(especialidad);
  }

}
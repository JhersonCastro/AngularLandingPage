import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medico-card',
  standalone: true,
  templateUrl: './medico-card.html',
  styleUrl: './medico-card.css'
})
export class MedicoCard {

  @Input() nombre = "";
  @Input() especialidad = "";
  @Input() frase = "";
  @Input() imagen = "";

}
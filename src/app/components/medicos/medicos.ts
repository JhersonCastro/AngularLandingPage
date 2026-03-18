import { Component } from '@angular/core';
import { MedicoCard } from '../medico-card/medico-card';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [MedicoCard],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css'
})
export class Medicos {

  descripcion = "Selecciona una especialidad para ver más detalles.";

  mostrar(especialidad: string) {

    const descripciones: any = {

      neural: 'La <strong>Terapia neural</strong> consiste en la aplicación de microinyecciones de procaína en puntos específicos del cuerpo para tratar dolores crónicos.',

      quiropraxia: 'La <strong>Quiropraxia</strong> se enfoca en el diagnóstico y tratamiento de los trastornos del sistema musculoesquelético.',

      fisioterapia: 'La <strong>Fisioterapia</strong> ayuda a restaurar el movimiento cuando una persona se ve afectada por una lesión.',

      nutricion: 'La <strong>Nutrición terapéutica</strong> diseña planes alimenticios personalizados para prevenir o tratar enfermedades.',

      otras: 'Contamos con especialidades adicionales como <em>psicología, odontología y medicina general</em>.'

    };

    this.descripcion = descripciones[especialidad] || "Información no disponible.";

  }

}
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportar-incidencias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reportar-incidencias.html',
  styleUrls: ['./reportar-incidencias.css']
})
export class ReportarIncidencias {

  cursoSeleccionado = signal('Inteligencia de Negocios');

  prioridadSeleccionada = signal('Media');

  ticketGenerado = signal('');

  seleccionarCurso(curso: string): void {

    this.cursoSeleccionado.set(curso);

  }

  seleccionarPrioridad(prioridad: string): void {

    this.prioridadSeleccionada.set(prioridad);

  }

  publicarIncidencia(): void {

    const numero = Math.floor(
      1000 + Math.random() * 9000
    );

    const ticket = `INC-${numero}`;

    this.ticketGenerado.set(ticket);

    alert(
      `✅ Incidencia publicada correctamente\n\n🎫 Ticket generado: ${ticket}`
    );

  }

}
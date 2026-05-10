import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

interface Room {
  id: string;
  nombre: string;
  tipo: 'aula' | 'comedor' | 'deporte' | 'recepcion';
}

interface Floor {
  numero: number;
  nombre: string;
  rooms: Room[];
}

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {

  pisos: Floor[] = [];

  pisoSeleccionado: Floor | null = null;

  aulaSeleccionada: Room | null = null;

  pisoExpandido: number | null = null;

  constructor(
    private router: Router
  ) {
    this.construirTorre();
  }

  construirTorre(): void {

    const edificio: Floor[] = [];

    const facultades = [
      'Servicios',
      'Sistemas',
      'Civil',
      'Industrial',
      'Negocios',
      'Derecho',
      'Arquitectura',
      'Comunicaciones',
      'Psicología',
      'Recreación'
    ];

    for (let i = 1; i <= 10; i++) {

      let rooms: Room[] = [];

      const tipoPiso = facultades[i - 1];

      /* ===== PISO 1 ===== */

      if (i === 1) {

        rooms = [

          {
            id: '101',
            nombre: 'Recepción Principal',
            tipo: 'recepcion'
          },

          {
            id: '102',
            nombre: 'Cafetería Central',
            tipo: 'comedor'
          }

        ];

      }

      /* ===== PISO 10 ===== */

      else if (i === 10) {

        rooms = [

          {
            id: '1001',
            nombre: 'Cancha de Básquet',
            tipo: 'deporte'
          },

          {
            id: '1002',
            nombre: 'Comedor Panorámico',
            tipo: 'comedor'
          }

        ];

      }

      /* ===== AULAS ===== */

      else {

        for (let r = 1; r <= 5; r++) {

          rooms.push({

            id: `${i}0${r}`,

            nombre: `Aula ${i}0${r}`,

            tipo: 'aula'

          });

        }

      }

      edificio.push({

        numero: i,

        nombre: `Piso ${i} - ${tipoPiso}`,

        rooms: rooms

      });

    }

    this.pisos = edificio.reverse();

  }

  seleccionarEspacio(
    piso: Floor,
    room: Room
  ): void {

    this.pisoSeleccionado = piso;

    this.aulaSeleccionada = room;

    this.pisoExpandido = piso.numero;

  }

  irAReservas(): void {

    if (this.aulaSeleccionada?.tipo === 'aula') {

      this.router.navigate([
        '/reservas'
      ]);

    }

  }

  irAReportarIncidencia(): void {

    this.router.navigate([
      '/reportar-incidencias'
    ]);

  }

  volverAlLogin(): void {

    this.router.navigate([
      '/login'
    ]);

  }

}
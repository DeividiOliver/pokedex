import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  // Definimos que o input deve obrigatoriamente seguir a interface Pokemon
  @Input() pokemon?: Pokemon;
}
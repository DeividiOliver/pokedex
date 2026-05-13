import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORTANTE para o ngClass

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  // Verifique se o nome das variáveis bate com o que usamos no HTML
  @Input() id: number = 0;
  @Input() nome: string = '';
  
  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
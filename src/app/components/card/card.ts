import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Esta interface define a estrutura exata do Pokémon que vem da API
// Isso é o TypeScript Rigoroso: o VS Code vai te avisar se você digitar algo errado
export interface PokemonData {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  // O símbolo '!' diz ao TS que este valor será preenchido pelo componente pai
  @Input() pokemon!: PokemonData; 

  // Getter para facilitar o acesso à imagem no HTML
  get pokemonImage(): string {
    return this.pokemon.sprites.other['official-artwork'].front_default;
  }

  // Getter para pegar o tipo principal e definir a cor do card
  get mainType(): string {
    return this.pokemon.types[0].type.name;
  }
}
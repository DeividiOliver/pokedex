import { Component, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  // Variável sincronizada com o seu app.html
  pokemonList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Objeto de teste para validar a renderização no localhost
    this.pokemonList = [
      { 
        id: 1, 
        name: 'bulbasaur', 
        types: [{ type: { name: 'grass' } }], 
        sprites: { other: { 'official-artwork': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' } } } 
      }
    ];
  }
}
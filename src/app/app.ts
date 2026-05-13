import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  pokemonList: any[] = [];

  constructor() {}

  ngOnInit(): void {
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
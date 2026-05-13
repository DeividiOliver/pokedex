import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card'; // Verifique se o caminho está correto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent], // CardComponent deve estar aqui
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  pokemonList: any[] = [];

  ngOnInit(): void {
    this.pokemonList = [
      { 
        id: 1, 
        name: 'bulbasaur',
        sprites: { other: { 'official-artwork': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' } } }
      }
    ];
  }
}
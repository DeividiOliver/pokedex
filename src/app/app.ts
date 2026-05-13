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
  // Padronizado para 'lista' para bater com o seu app.html
  lista: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Dados de teste para validar o funcionamento do localhost
    this.lista = [
      { 
        id: 1, 
        name: 'bulbasaur', 
        types: [{ type: { name: 'grass' } }], 
        sprites: { other: { 'official-artwork': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' } } } 
      }
    ];
  }
}
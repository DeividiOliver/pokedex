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
export class AppComponent implements OnInit { // Verifique se o nome é EXATAMENTE AppComponent
  pokemonList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pokemonList = [
      { id: 1, name: 'bulbasaur', sprites: { front_default: '...' } }
    ];
  }
}
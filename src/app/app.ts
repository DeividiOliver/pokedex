import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card';
import { HttpService } from './http.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  // Agora usamos a interface Pokemon[] em vez de any[]
  pokemonList: Pokemon[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    // O TypeScript agora sabe que 'data' é um array de Pokemon
    this.httpService.getPokemonList(20, 0).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemonList = data;
      },
      error: (err) => {
        console.error('Erro ao carregar Pokémons:', err);
      }
    });
  }
}
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
  pokemonList: Pokemon[] = [];         // Lista original da API
  filteredPokemonList: Pokemon[] = []; // Lista que será exibida na tela

  public pagina = 1;

  public offset = 0;


  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.httpService.getPokemonList(20, 0).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemonList = data;
        this.filteredPokemonList = data; // Inicialmente, as duas são iguais
      }
    });
  }

  /**
   * Filtra a lista baseada no valor digitado no input
   */
  onSearchChange(event: any): void {
    const query = event.target.value.toLowerCase();
    
    this.filteredPokemonList = this.pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query)
    );
  }
}
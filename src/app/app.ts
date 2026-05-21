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

  public offset = 1;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  // TO DO
  mudarPagina(
    // utilize os parametros que achar necessario
  ) {
    // o parametro offset em getPokemonList é utilizado para obter os proximos pokemons a partir daquele ponto 
    // o parametro limit indica quantos pokemons devem ser retornados ou seja: 
    // limit 20 e offset 0 retorna os 20 primeiros, limit 20 e offset 20 retorna os pokemons do 20 ao 40 e assim por diante
    // para a paginação funcionar voce deve alterar o valor do atributo pagina e com base na 
    // pagina calcular o offset pagina 1 offset 0 pagina 2 offset 20
    // utilize sempre o limit 20
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.httpService.getPokemonList(20, this.offset).subscribe({
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
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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

/**
   * Altera a página atual, recalcula o offset e busca os novos dados na API.
   * @param acao Define a direção da paginação ('avancar' ou 'voltar')
   */
  mudarPagina(acao: string): void {
    if (acao === 'avancar') {
      // Pega o valor atual da página e soma 1
      this.pagina = this.pagina + 1; 
      
    } else if (acao === 'voltar' && this.pagina > 1) {
      // Pega o valor atual da página e subtrai 1
      this.pagina = this.pagina - 1; 
    }

    // Calcula o novo ponto de partida (offset) para a API
    this.offset = (this.pagina - 1) * 20;
    
    // Dispara a busca na API com o novo valor de offset atualizado
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
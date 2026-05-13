import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  /**
   * Busca uma lista de Pokémons com detalhes completos utilizando a interface Pokemon
   * @param limit Quantidade de Pokémons a buscar
   * @param offset Posição inicial da busca
   */
  getPokemonList(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      switchMap((response) => {
        // Mapeia cada resultado para uma requisição de detalhes tipada
        const detailsRequests: Observable<Pokemon>[] = response.results.map((pokemon: any) =>
          this.http.get<Pokemon>(pokemon.url)
        );
        return forkJoin(detailsRequests);
      })
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      switchMap((response) => {
        const detailsRequests: Observable<Pokemon>[] = response.results.map((p: any) =>
          this.http.get<Pokemon>(p.url)
        );
        return forkJoin(detailsRequests);
      })
    );
  }
}
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    obterPokemon(): Observable <any> {
      return of ([
        'charmander',
        'squirtle',
        'bulbasaur'
      ])
    }
}
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    obterPokemon() {
      return [
        'charmander',
        'squirtle',
        'bulbasaur'
      ]  
    }
}
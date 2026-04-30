import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpService {

    
 httpClient = inject(HttpClient)

  urlApi = "https://pokeapi.co/api/v2/pokemon/"
 
    obterPokemon(): Observable <any> {
      return  this.httpClient.get(this.urlApi)
      return  this.httpClient.get(this.urlApi)
       
    
    }
}
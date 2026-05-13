import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit{
  pesquisa = "teste"
  
  service = inject(HttpService)

  lista: any = [];

  ngOnInit(): void {
      this.service.obterPokemon().subscribe(resposta => {
         this.lista = resposta.results.map(item => ({
          ...item,
          id: this.extractIdFromUrl(item.url)
         }));
  });
  }

    
extractIdFromUrl(url: string){
    const m = url.match(/\/pokemon\/(\d+)\/?$/);
    return m ? m[1] : null;
  }

}

import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  pesquisa = "teste"
  
  service = inject(HttpService)
  
  ngOnInit(): void {
    console.log(this.service.obterPokemon());
  }
}

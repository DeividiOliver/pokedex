import { Component, Input } from '@angular/core'; // O erro estava aqui, deve ser @angular/core
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  // Mantendo o input obrigatório conforme solicitado para boas práticas
  @Input({ required: true }) pokemon: any;
}
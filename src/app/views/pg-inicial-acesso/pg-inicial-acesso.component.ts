import { onboard } from './../../models/onboard.model';
import { Component } from '@angular/core';
import { OnboardComponent } from '../../components/shared/onboard/onboard.component';
import { LinkButtonComponent } from '../../components/shared/link-button/link-button.component';

@Component({
  selector: 'app-pg-inicial-acesso',
  standalone: true,
  imports: [OnboardComponent, LinkButtonComponent],
  templateUrl: './pg-inicial-acesso.component.html',
  styleUrl: './pg-inicial-acesso.component.scss',
})
export class PgInicialAcessoComponent {
  onboard: onboard = {
    image: {
      url: 'assets/Menino e Menina.png',
      alt: 'Menino a direta, segurando seu chapeu na cabeça e Menina a esquerda segurando uma pokebola',
    },
    title: 'Está pronto para essa aventura?',
    paragraf: 'Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!',
  };
}

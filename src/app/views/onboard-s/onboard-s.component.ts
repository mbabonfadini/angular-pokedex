import { Component } from '@angular/core';
import { OnboardComponent } from "../../components/shared/onboard/onboard.component";
import { PaginationComponent } from "../../components/shared/pagination/pagination.component";
import { LinkButtonComponent } from "../../components/shared/link-button/link-button.component";
import { onboard } from '../../models/onboard.model';

@Component({
  selector: 'app-onboard-s',
  standalone: true,
  imports: [OnboardComponent, PaginationComponent, LinkButtonComponent],
  templateUrl: './onboard-s.component.html',
  styleUrl: './onboard-s.component.scss'
})
export class OnboardSComponent {
  onboard: onboard = {
    image: {url:"assets/Menina Treinadora.png", alt:"Menina Treinadora de Boné e bolsa lateral"},
    title: "Mantenha sua Pokédex atualizada",
    paragraf:`Cadastre-se e mantenha seu perfil,
pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.`
  }
}

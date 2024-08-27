import { Component } from '@angular/core';
import { OnboardComponent } from "../../components/shared/onboard/onboard.component";
import { PaginationComponent } from "../../components/shared/pagination/pagination.component";
import { LinkButtonComponent } from "../../components/shared/link-button/link-button.component";
import {onboard} from "../../models/onboard.model"

@Component({
  selector: 'app-onboard-f',
  standalone: true,
  imports: [OnboardComponent, PaginationComponent, LinkButtonComponent],
  templateUrl: './onboard-f.component.html',
  styleUrl: './onboard-f.component.scss'
})
export class OnboardFComponent {

  onboard: onboard = {
    image: {url:"assets/Menino e o Professor pkx.png", alt:"Criança com rede de pesca e um adulto segunrando uma bolsa"},
    title: "Todos os Pokémons em um só Lugar",
    paragraf:`Acesse uma vasta lista de Pokémon de
todas as gerações já feitas pela Nintendo`
  }

}

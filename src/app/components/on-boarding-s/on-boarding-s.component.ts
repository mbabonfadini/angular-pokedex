import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";

@Component({
  selector: 'app-on-boarding-s',
  standalone: true,
  imports: [ButtonComponent, PaginationComponent],
  templateUrl: './on-boarding-s.component.html',
  styleUrl: './on-boarding-s.component.scss'
})

export class OnBoardingSComponent {



   imagemCapa: string = "assets/Menina Treinadora.png"
   titulo:string = "Mantenha sua Pokédex atualizada"
   paragrafo:string =`Cadastre-se e mantenha seu perfil,
pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet.`

  navegar(url:string):void {
    window.open(url, '_blank')
    return undefined
  }

  alternarLayout():void {

  }

}

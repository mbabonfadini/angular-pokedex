import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";

@Component({
  selector: 'app-on-boarding-f',
  standalone: true,
  imports: [ButtonComponent, PaginationComponent],
  templateUrl: './on-boarding-f.component.html',
  styleUrl: './on-boarding-f.component.scss'
})

export class OnBoardingFComponent {



   imagemCapa: string = "assets/Menino e o Professor pkx.png"
   titulo:string = "Todos Os Pokémons em um só Lugar"
   paragrafo:string =`Acesse uma vasta lista de Pokémon de
        todas as gerações já feitas pela Nintendo`

  navegar(url:string):void {
    window.open(url, '_blank')
    return undefined
  }

  alternarLayout():void {

  }

}

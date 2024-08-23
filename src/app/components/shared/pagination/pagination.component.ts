import { Component} from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  pages: string[] = [];
  ativePage: number = 0;

  constructor(){
    this.pages = [
      'Page 1',
      'Page 2'
    ]
  }

  OnClick(id:number){
    this.ativePage = id
  }

  AtivarPagina(id:number):string{
    if(id === this.ativePage){
      return "paginacao__ativo"
    } else {
      return "paginacao__pagina"
    }
  }






}

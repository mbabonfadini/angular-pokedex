import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-capa-regioes',
  standalone: true,
  imports: [],
  templateUrl: './capa-regioes.component.html',
  styleUrl: './capa-regioes.component.scss'
})
export class CapaRegioesComponent {

  @Input() backgroundImage:string = '/assets/capa-kanto.png';
  @Input() titleRegion:string = '';
  @Input() geracionRegion:number = 0;




}

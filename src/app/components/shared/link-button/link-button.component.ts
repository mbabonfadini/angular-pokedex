import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {
  @Input() urlLink: string ;
  @Input() buttonName: string;
  @Input() buttonClass: string = 'default';

  constructor(){
    this.urlLink = '';
    this.buttonName ='';
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [],
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.scss'
})
export class OnboardComponent {

  @Input() imageOnBoard: string;
  @Input() titleOnBoard: string;
  @Input() paragrafOnBoard: string;
  @Input() imageAltOnBoard: string;

  constructor(){
    this.imageOnBoard ='';
    this.imageAltOnBoard='';
    this.titleOnBoard ='';
    this.paragrafOnBoard =''
  }

}

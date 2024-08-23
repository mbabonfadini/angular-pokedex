import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText:string ='';
  @Input()
    buttonClass:boolean= false;
      @Output() clicked = new EventEmitter<void>()

    OnClick(){
      this.clicked.emit()
    }
}

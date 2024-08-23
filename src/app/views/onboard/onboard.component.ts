import { Component } from '@angular/core';
import { OnBoardingFComponent } from "../../components/on-boarding-f/on-boarding-f.component";
import { OnBoardingSComponent } from "../../components/on-boarding-s/on-boarding-s.component";

@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [OnBoardingFComponent, OnBoardingSComponent],
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.scss'
})
export class OnboardComponent {

}

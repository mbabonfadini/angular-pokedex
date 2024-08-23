import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnBoardingFComponent } from "./components/on-boarding-f/on-boarding-f.component";
import { OnboardComponent } from "./views/onboard/onboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnBoardingFComponent, OnboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokedex-app';
}

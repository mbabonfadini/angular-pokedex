import { Routes, RouterModule } from '@angular/router';
import { OnBoardingFComponent } from './components/on-boarding-f/on-boarding-f.component';
import { OnboardComponent } from './views/onboard/onboard.component';
import { OnBoardingSComponent } from './components/on-boarding-s/on-boarding-s.component';



export const routes: Routes = [
    {
      path:'', component: OnboardComponent, pathMatch:'full',
    },
    {
      path:'onboarding', component: OnboardComponent, pathMatch:'full',
      },
      {path:'primeiro', component: OnBoardingFComponent, pathMatch:'full'},
      {path:'segundo', component: OnBoardingSComponent, pathMatch:'full'}
];

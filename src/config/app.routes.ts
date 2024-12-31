import {Routes} from '@angular/router';
import {ChallengeOne} from '../app/page/ChallengeOne/ChallengeOne';
import {HomePage} from '../app/page/Home/HomePage';


export const routes: Routes = [
  {
    path: "challenge-one",
  component: ChallengeOne
  },
  {
    path: "",
    component: HomePage
  }
];

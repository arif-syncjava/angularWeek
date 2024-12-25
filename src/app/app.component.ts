import {Component} from '@angular/core';
import {HomePage} from './pages/HomePage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomePage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{


}

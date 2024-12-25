import {Component} from '@angular/core';
import {ChildComponent} from './ChildComponent';

@Component({
  selector: 'ParentComponent',
  imports: [
    ChildComponent
  ],
  templateUrl: 'ParentComponent.html'
})
export class ParentComponent {

  name = 'hi Iam parent who are you';

  nameChange () {
    this.name = 'Iam from child button click' ;
  }



}

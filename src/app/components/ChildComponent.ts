import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ChildComponent',
  templateUrl: 'ChildComponent.html'
})
export class ChildComponent {
  @Input() name = 'hi Iam child' ;
  @Output() buttonClick = new EventEmitter() ;

  buttonEvent () {
    this.buttonClick.emit() ;
  }



}

import {Component} from '@angular/core';
import {AppUser} from '../models/AppUser';
import {NgClass, UpperCasePipe} from '@angular/common';
import {ParentComponent} from '../components/ParentComponent';

@Component({
    selector: 'HomePage',
    templateUrl: 'HomePage.html',
  imports: [
    UpperCasePipe,
    NgClass,
    ParentComponent
  ],
    styleUrl: 'HomePage.css'
  }
)
export class HomePage {

  headingTitle = 'Iam a heading title' ;
  appUser: AppUser ;
  nameList: string[] = ['firstName', 'lastname'] ;

  constructor() {
    this.appUser = {
      name: 'web application with angular',
      email: '@email.com',
      age: 10
    }
  }







}

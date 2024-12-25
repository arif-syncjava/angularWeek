import {Component} from '@angular/core';
import {AppUser} from '../models/AppUser';
import {UpperCasePipe} from '@angular/common';

@Component({
    selector: 'HomePage',
    templateUrl: 'HomePage.html',
    imports: [
      UpperCasePipe
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

  getUrl () {
    return 'www.google.com' ;
  }








}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config/app.config';
import { Application } from './app/Application';

bootstrapApplication(Application, appConfig)
  .catch((err) => console.error(err));

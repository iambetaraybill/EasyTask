import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


//// standalone way
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

////Module Way
platformBrowserDynamic().bootstrapModule(AppModule)
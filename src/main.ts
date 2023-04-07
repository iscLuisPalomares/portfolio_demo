import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function getBackEndUrl() {
  if (getBaseUrl().includes("localhost") || getBaseUrl().includes("192.168")) return "http://localhost:3000/";
  return "https://portfolio-demo-service.azurewebsites.net/";
  //in case you have your backend under same url you can call getBaseUrl() instead
  // return getBaseUrl();
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'BACKEND_URL', useFactory: getBackEndUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Se você usa esta linha, o zone.js DEVE estar no main.ts ou polyfills
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
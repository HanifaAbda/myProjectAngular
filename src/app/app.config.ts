import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
              provideHttpClient(), //active le service httpClient
              provideZoneChangeDetection({ eventCoalescing: true }), //Optimise Angular Zones (détection des changements)
              provideRouter(routes), // Configure le router avec les routes définies
              provideAnimationsAsync(), // active les animations Angular avec la versin Async()
            ]

};

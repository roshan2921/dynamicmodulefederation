import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',

        // For Routing
        displayName: 'flights',
        routePath: 'flights',
        ngModuleName: 'RemoteEntryModule',
      },

    ] as Microfrontend[]);
  }
}

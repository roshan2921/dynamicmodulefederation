import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';
// import { LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime';

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    ngModuleName: string;
};
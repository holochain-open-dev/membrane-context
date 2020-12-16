/// <reference types="mocha" />
import { AdminWebsocket, AppWebsocket, CellId } from '@holochain/conductor-api';
import { Constructor } from 'lit-element';
export interface MembraneContext {
    cellId: CellId;
    appWebsocket: AppWebsocket;
    adminWebsocket: AdminWebsocket;
}
export declare const withMembraneContext: <T extends Constructor<HTMLElement>>(baseClass: T) => T & Constructor<{
    context: {
        membrane: MembraneContext;
    };
}>;

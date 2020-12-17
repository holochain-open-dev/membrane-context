import { PropertyValues } from 'lit-element';
import { AdminWebsocket, AppWebsocket, CellId } from '@holochain/conductor-api';
import { MembraneContext } from './with-membrane-context';
declare const HolochainMembraneContext_base: any;
export declare class HolochainMembraneContext extends HolochainMembraneContext_base {
    static get provide(): string[];
    holochainMembraneContext: MembraneContext;
    cellId: CellId;
    appWebsocket: AppWebsocket;
    adminWebsocket: AdminWebsocket;
    updated(changedValues: PropertyValues): void;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
export {};

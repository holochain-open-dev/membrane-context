import { AdminWebsocket, AppWebsocket, CellId } from '@holochain/conductor-api';
import { Constructor } from 'lit-element';
import { ConsumerMixin } from 'lit-element-context';

export interface MembraneContext {
  cellId?: CellId;
  appWebsocket?: AppWebsocket;
  adminWebsocket?: AdminWebsocket;
}

export const membraneContext = <T extends Constructor<HTMLElement>>(
  baseClass: T
): T & Constructor<{ membraneContext: MembraneContext }> =>
  (class extends ConsumerMixin(baseClass) {
    static get inject() {
      return ['membraneContext'];
    }
  } as unknown) as T & Constructor<{ membraneContext: MembraneContext }>;

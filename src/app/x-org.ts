import { XApp } from './x-app';
import { XHost } from './x-host';

export class XOrg {
  constructor(
    public Id: string,
    public UserId: string,
    public Name: string,
    public Apps: XApp[],
    public Hosts: XHost[]
  ) {  }
}

import { XOrg } from './x-org';

export class User {
  constructor(
    public Id: string,
    public Login: string,
    public Orgs: XOrg[]
  ) {  }
}

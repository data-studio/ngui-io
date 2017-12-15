import { XApi } from './x-api';

export class XApp {
  constructor(
    public Id: string,
    public OrgId: string,
    public UserId: string,
    public Name: string,
    public Apis: XApi[]
  ) {  }
}

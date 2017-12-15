import { XVersion } from './x-version';

export class XApi {
  constructor(
    public Id: string,
    public AppId: string,
    public Name: string,
    public Versions: XVersion[]
  ) {  }
}

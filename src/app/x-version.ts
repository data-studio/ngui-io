import { XOperation } from './x-operation';
import { XRoute } from './x-route';

export class XVersion {
  constructor(
    public Id: string,
    public ApiId: string,
    public Operations: XOperation[],
    public Routes: XRoute[]
  ) {  }
}

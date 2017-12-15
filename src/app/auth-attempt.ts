import { Token } from './token';

export class AuthAttempt {
  constructor(
    public Id: string,
    public Login: string,
    public Finished: string,
    public Error: string,
    public TokenId: string,
    public Token: Token
  ) {  }
}

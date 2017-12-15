export class Token {
  constructor(
    public Id: string,
    public UserId: string,
    public Key: string,
    public Created: number,
    public Expiry: number,
    public Revoked: number
  ) {  }
}

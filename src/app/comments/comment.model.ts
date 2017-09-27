import { Adoption } from './../adoptions/adoption.model';
import { User } from './../auth/user.model';
export class Comment {
  public id: number;

  constructor(public message: string, public adoption: Adoption, public user: User) {}

}

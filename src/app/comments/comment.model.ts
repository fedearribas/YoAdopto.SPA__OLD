import { Adoption } from './../adoptions/adoption.model';
import { User } from './../auth/user.model';
export class Comment {
  public id: number;
  public created_at: Date;
  public user: User;
  public adoption: Adoption;

  constructor(public message: string, public publication_id: number, public user_id: number) {}

}

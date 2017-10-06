import { User } from './../../auth/user.model';
import { Adoption } from './../../adoptions/adoption.model';
export class MarkedPublications {
  public id: number;
  public publication: Adoption;
  public user: User;

  constructor(public publication_id: number, public user_id: number, public publication_type: string) {}
}

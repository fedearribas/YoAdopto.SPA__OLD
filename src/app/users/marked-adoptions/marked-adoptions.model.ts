import { User } from './../../auth/user.model';
import { Adoption } from './../../adoptions/adoption.model';
export class MarkedAdoptions {
  public id: number;
  public adoption: Adoption;
  public user: User;

  constructor(public adoption_id: number, public user_id: number) {}
}

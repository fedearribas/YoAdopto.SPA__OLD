import { MarkedAdoptions } from './../users/marked-adoptions/marked-adoptions.model';
export class User {
  public id: number;
  public admin: boolean;
  public image: string;
  public marked_adoptions: MarkedAdoptions[];

  constructor(public email, public name) {}
}

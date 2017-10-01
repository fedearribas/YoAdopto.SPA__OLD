import { MarkedAdoptions } from './../users/marked-adoptions/marked-adoptions.model';
export class User {
  public id: number;
  public admin: boolean;
  public image: string;

  constructor(public email, public name) {}
}

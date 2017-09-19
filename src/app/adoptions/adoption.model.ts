import { Pet } from './../shared/pet.model';
export class Adoption {
  public id: number;

  constructor(
    public name: string,
    public age: number,
    public age_measurement_unit: string,
    public image: string,
    public adopted: boolean,
    public description: string,
    public published_date: Date,
    public contact_phone: number,
    public contact_email: string) {  }

}

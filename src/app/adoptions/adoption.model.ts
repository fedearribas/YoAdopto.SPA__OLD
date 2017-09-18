import { Pet } from './../shared/pet.model';
export class Adoption {
  public id: number;

  constructor(
    public pet: Pet,
    public description: string,
    public publishedDate: Date,
    public contactPhone: number,
    public contactEmail: string) {  }

}

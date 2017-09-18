import { Pet } from './../shared/pet.model';
export class Adoption {
  constructor(
    public id: number,
    public pet: Pet,
    public description: string,
    public publishedDate: Date,
    public contactPhone: number,
    public contactEmail: string) {  }
}

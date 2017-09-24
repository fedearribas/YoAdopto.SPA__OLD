export class Adoption {
  public id: number;
  public created_at: Date;

  constructor(
    public name?: string,
    public age?: number,
    public age_measurement_unit?: string,
    public image?: string,
    public adopted?: boolean,
    public description?: string,
    public published_date?: Date,
    public contact_phone?: number,
    public contact_email?: string) {  }

}

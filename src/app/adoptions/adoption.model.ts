import { MarkedAdoptions } from './../users/marked-adoptions/marked-adoptions.model';
import { Comment } from './../comments/comment.model';
import { User } from './../auth/user.model';
export class Adoption {
  public id: number;
  public created_at: Date;

  constructor(
    public name?: string,
    public age?: number,
    public type?: string,
    public age_measurement_unit?: string,
    public image?: string,
    public adopted?: boolean,
    public description?: string,
    public location?: string,
    public published_date?: Date,
    public contact_phone?: number,
    public contact_email?: string,
    public user?: User,
    public found?: boolean,
    public delivered?: boolean,
    ) {  }

}

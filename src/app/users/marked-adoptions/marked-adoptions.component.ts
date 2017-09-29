import { MarkedAdoptions } from './marked-adoptions.model';
import { AuthService } from './../../auth/auth.service';
import { MarkedAdoptionsService } from './marked-adoptions.service';
import { Adoption } from './../../adoptions/adoption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marked-adoptions',
  templateUrl: './marked-adoptions.component.html',
  styleUrls: ['./marked-adoptions.component.css']
})
export class MarkedAdoptionsComponent implements OnInit {

  adoptions: Adoption[] = [];

  constructor(private markedAdoptionsService: MarkedAdoptionsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.markedAdoptionsService.getMarkedAdoptionsByUserId(this.authService.current_user.id).subscribe(
      (res: MarkedAdoptions[]) => {
        console.log(res);
        res.forEach(element => {
          this.adoptions.push(element.adoption);
        });
      }
    );
  }

}

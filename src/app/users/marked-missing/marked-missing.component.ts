import { Missing } from './../../missing/missing.model';
import { MarkedAdoptionsService } from './../marked-adoptions/marked-adoptions.service';
import { MarkedAdoptions } from './../marked-adoptions/marked-adoptions.model';

import { AuthService } from './../../auth/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marked-missing',
  templateUrl: './marked-missing.component.html',
  styleUrls: ['./marked-missing.component.css']
})
export class MarkedMissingComponent implements OnInit {

  missing: Missing[] = [];
  noDataMsg = '';

  constructor(private markedAdoptionsService: MarkedAdoptionsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.markedAdoptionsService.getMarkedMissingByUserId(this.authService.current_user.id).subscribe(
      (res: MarkedAdoptions[]) => {
        console.log(res);
        if (res.length <= 0) {
          this.noDataMsg = 'Aún no tiene ninguna publicacion de perdidos en Destacados';
        }
        res.forEach(element => {
          this.missing.push(element.adoption);
        });
      }
    );
  }

}

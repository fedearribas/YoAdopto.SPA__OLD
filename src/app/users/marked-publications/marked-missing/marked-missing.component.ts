import { MarkedPublicationsService } from './../marked-publications.service';
import { MarkedPublications } from './../marked-publications.model';
import { AuthService } from './../../../auth/auth.service';
import { Missing } from './../../../missing/missing.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marked-missing',
  templateUrl: './marked-missing.component.html',
  styleUrls: ['./marked-missing.component.css']
})
export class MarkedMissingComponent implements OnInit {

  missing: Missing[] = [];
  noDataMsg = '';

  constructor(private markedPublicationsService: MarkedPublicationsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.markedPublicationsService.getMarkedMissingByUserId(this.authService.current_user.id).subscribe(
      (res: MarkedPublications[]) => {
        console.log(res);
        if (res.length <= 0) {
          this.noDataMsg = 'Aún no tiene ninguna publicacion de perdidos en Destacados';
        }
        res.forEach(element => {
          this.missing.push(element.publication);
        });
      }
    );
  }

}

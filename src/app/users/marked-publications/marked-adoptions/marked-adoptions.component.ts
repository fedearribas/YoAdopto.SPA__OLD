import { MarkedPublicationsService } from './../marked-publications.service';
import { MarkedPublications } from './../marked-publications.model';
import { AuthService } from './../../../auth/auth.service';
import { Adoption } from './../../../adoptions/adoption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marked-adoptions',
  templateUrl: './marked-adoptions.component.html',
  styleUrls: ['./marked-adoptions.component.css']
})
export class MarkedAdoptionsComponent implements OnInit {

  adoptions: Adoption[] = [];
  noDataMsg = '';

  constructor(private markedPublicationsService: MarkedPublicationsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.markedPublicationsService.getMarkedAdoptionsByUserId(this.authService.current_user.id).subscribe(
      (res: MarkedPublications[]) => {
        if (res.length <= 0) {
          this.noDataMsg = 'Aún no tiene ninguna adopcion en Destacados';
        }
        res.forEach(element => {
          this.adoptions.push(element.publication);
        });
      }
    );
  }

}

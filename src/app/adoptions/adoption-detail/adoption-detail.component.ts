import { MarkedAdoptions } from './../../users/marked-adoptions/marked-adoptions.model';
import { MarkedAdoptionsService } from './../../users/marked-adoptions/marked-adoptions.service';
import { AuthService } from './../../auth/auth.service';
import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adoption-detail',
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.css']
})
export class AdoptionDetailComponent implements OnInit {

  adoption: Adoption;
  isDataAvailable = false;
  marked = false;
  markedAdoption: MarkedAdoptions;
  loadedMarked = false;

  constructor(private route: ActivatedRoute,
    private adoptionsService: AdoptionsService,
    public authService: AuthService,
    private router: Router,
    private markedAdoptionsService: MarkedAdoptionsService,
    private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
          this.adoptionsService.getAdoption(id).subscribe(
              (res) => {
                this.adoption = res;
                this.getMark();
            });
          console.log(this.adoption);
      }
    );
  }

  getMark() {
    this.markedAdoptionsService.getMarkedAdoptionByUserIdAndAdoptionId(this.authService.current_user.id, this.adoption.id).subscribe(
      (res: MarkedAdoptions) => {
        this.markedAdoption = res;
        console.log(res);
        if (this.markedAdoption) {
          this.marked = true;
        }
        this.loadedMarked = true;
      }
    );
  }

  onFav() {
    if (!this.marked) {
      const mark = new MarkedAdoptions(this.adoption.id, this.authService.current_user.id);
      this.markedAdoptionsService.insertAdoptionMark(mark).subscribe(
        (res: MarkedAdoptions) => {
          this.marked = true;
        }
      );

    } else {
      this.markedAdoptionsService.deleteAdoptionMark(this.markedAdoption.id).subscribe(
        (res: MarkedAdoptions) => {
          this.marked = false;
        }
      );
    }
  }

  onBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  canSeeData() {
    if (this.authService.userSignedIn()) {
      return true;
    }
    return false;
  }

  canManage() {
    if (this.authService.userSignedIn() && this.adoption) {
      return this.authService.current_user.id === this.adoption.user.id || this.authService.current_user.admin;
    }
    return false;
  }

  onDelete() {
    if (confirm('Esta seguro de borrar la publicación de ' + this.adoption.name + '?')) {
    this.adoptionsService.deleteAdoption(this.adoption);
    }
  }

}

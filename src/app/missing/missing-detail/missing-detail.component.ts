import { MarkedAdoptions } from './../../users/marked-adoptions/marked-adoptions.model';
import { MarkedAdoptionsService } from './../../users/marked-adoptions/marked-adoptions.service';
import { AuthService } from './../../auth/auth.service';
import { MissingService } from './../missing.service';
import { Missing } from './../missing.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missing-detail',
  templateUrl: './missing-detail.component.html',
  styleUrls: ['./missing-detail.component.css']
})
export class MissingDetailComponent implements OnInit {

  miss: Missing;
  isDataAvailable = false;
  marked = false;
  markedMissing: MarkedAdoptions;
  loadedMarked = false;

  constructor(private route: ActivatedRoute,
    private missingService: MissingService,
    public authService: AuthService,
    private router: Router,
    private markedAdoptionsService: MarkedAdoptionsService,
    private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
          this.missingService.getMiss(id).subscribe(
              (res) => {
                this.miss = res;
                this.getMark();
            });
          console.log(this.miss);
      }
    );
  }

  getMark() {
    if (this.authService.userSignedIn()) {
      this.markedAdoptionsService.getMarkedAdoptionByUserIdAndAdoptionId(this.authService.current_user.id, this.miss.id).subscribe(
        (res: MarkedAdoptions) => {
          this.markedMissing = res;
          console.log(res);
          if (this.markedMissing) {
            this.marked = true;
          }
          this.loadedMarked = true;
        }
      );
    }
  }

  onFav() {
    if (!this.marked) {
      const mark = new MarkedAdoptions(this.miss.id, this.authService.current_user.id, 'missing');
      this.markedAdoptionsService.insertAdoptionMark(mark).subscribe(
        (res: MarkedAdoptions) => {
          this.marked = true;
        }
      );

    } else {
      this.markedAdoptionsService.deleteAdoptionMark(this.markedMissing.id).subscribe(
        (res: MarkedAdoptions) => {
          this.marked = false;
        }
      );
    }
  }

  onBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  onMarkAsFound() {
    this.miss.found = true;
    this.missingService.updateMissing(this.miss, false);
  }

  onDismarkAsFound() {
    this.miss.found = false;
    this.missingService.updateMissing(this.miss, false);
  }

  canSeeData() {
    if (this.authService.userSignedIn()) {
      return true;
    }
    return false;
  }

  canManage() {
    if (this.authService.userSignedIn() && this.miss) {
      return this.authService.current_user.id === this.miss.user.id || this.authService.current_user.admin;
    }
    return false;
  }

  onDelete() {
    if (confirm('Esta seguro de borrar la publicación de ' + this.miss.name + '?')) {
    this.missingService.deleteMissing(this.miss);
    }
  }

}

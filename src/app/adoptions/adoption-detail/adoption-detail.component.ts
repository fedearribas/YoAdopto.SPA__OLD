import { MarkedAdoptionsService } from './../../users/marked-adoptions/marked-adoptions.service';
import { AuthService } from './../../auth/auth.service';
import { AdoptionsMemoryService } from './../adoptions-memory.service';
import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adoption-detail',
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.css']
})
export class AdoptionDetailComponent implements OnInit {

  adoption: Adoption;
  isDataAvailable = false;
  marked = false;

  constructor(private route: ActivatedRoute,
    private adoptionsService: AdoptionsService,
    private adoptionsMemoryService: AdoptionsMemoryService,
    public authService: AuthService,
    private router: Router,
    private markedAdoptionsService: MarkedAdoptionsService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
          this.adoption = this.adoptionsMemoryService.getAdoption(id);
          if (!this.adoption) {
            this.adoptionsService.getAdoption(id).subscribe(
              (adoption: Adoption) => this.adoption = adoption,
              (error: Response) => {
                if (error.status == 404) {
                  this.router.navigate(['/notfound']);
                }
               }
            );
          }
      }
    );

    // TODO  --- MARCAR SEGUN USUARIO
  }

  onFav() {
    this.marked = !this.marked;
  }

  canSeeData() {
    if (this.authService.userSignedIn()) {
      return true;
    }
    return false;
  }

  canManage() {
    if (this.authService.userSignedIn()) {
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

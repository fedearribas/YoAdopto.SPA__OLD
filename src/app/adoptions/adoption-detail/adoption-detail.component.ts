import { Angular2TokenService } from 'angular2-token';
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
  constructor(private route: ActivatedRoute,
    private adoptionsService: AdoptionsService,
    private adoptionsMemoryService: AdoptionsMemoryService,
    public authService: Angular2TokenService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
          this.adoption = this.adoptionsMemoryService.getAdoption(id);
          if (!this.adoption) {
            this.adoptionsService.getAdoption(id).subscribe(
              (adoption: Adoption) => this.adoption = adoption
            );
          }
      }
    );
  }

  canManage() {
    return this.authService.currentUserData.id === this.adoption.user.id;
  }

  onDelete() {
    if (confirm('Esta seguro de borrar la publicación de ' + this.adoption.name + '?')) {
    this.adoptionsService.deleteAdoption(this.adoption).subscribe(
      (data) => {
        this.adoptionsMemoryService.deleteAdoption(this.adoption);
        this.router.navigate(['/adoptions']);
      }
    );
    }
  }

}

import { AdoptionsMemoryService } from './../adoptions-memory.service';
import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
    private adoptionsMemoryService: AdoptionsMemoryService) { }

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

}

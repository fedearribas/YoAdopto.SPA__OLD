import { Subscription } from 'rxjs/Subscription';
import { Adoption } from './../adoption.model';
import { AuthService } from './../../auth/auth.service';
import { AdoptionsMemoryService } from './../adoptions-memory.service';
import { AdoptionsService } from './../adoptions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-adoptions-container',
  templateUrl: './adoptions-container.component.html',
  styleUrls: ['./adoptions-container.component.css']
})
export class AdoptionsContainerComponent implements OnInit, OnDestroy {
  adoptions: Adoption[] = [];
  subscription: Subscription;

  constructor (private adoptionService: AdoptionsService,
    private adoptionsMemoryService: AdoptionsMemoryService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.adoptions = this.adoptionsMemoryService.getData();
    console.log(this.adoptions.length);
    if (this.adoptions.length <= 0) {
      this.getAdoptions();
    }
    this.subscription = this.adoptionsMemoryService.adoptionsListChanged.subscribe(
      (adoptions: Adoption[]) => {
        this.adoptions = adoptions;
      }
    );
  }

  getAdoptions() {
    this.adoptionService.getAll().subscribe(
      (adoptions: Adoption[]) => {
        this.adoptions = adoptions;
      },
      (error) =>  {
       console.log(error.message);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

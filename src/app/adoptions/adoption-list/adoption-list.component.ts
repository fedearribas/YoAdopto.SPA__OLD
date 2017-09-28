import { AuthService } from './../../auth/auth.service';
import { AdoptionsMemoryService } from './../adoptions-memory.service';
import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit, OnDestroy {

  constructor (private adoptionService: AdoptionsService,
              private adoptionsMemoryService: AdoptionsMemoryService,
              public authService: AuthService
            ) {}

  adoptions: Adoption[] = [];
  subscription: Subscription;
  errorMessage: string;
  timerSubscription: Subscription;
  noDataMsg: string;

  ngOnInit() {
    /* this.timerSubscription = TimerObservable.create(0, 3000).subscribe(
      () => this.getAdoptions()
    ); */
    this.adoptions = this.adoptionsMemoryService.getData();
    console.log(this.adoptions.length);
    if (this.adoptions.length <= 0) {
      this.getAdoptions();
    }
    this.subscription = this.adoptionsMemoryService.adoptionsListChanged.subscribe(
      (adoptions: Adoption[]) => {
        this.adoptions = adoptions;
        if (this.adoptions.length <= 0) {
          this.noDataMsg = 'Aun no hay datos cargados, vuelva a intentarlo mas tarde!';
        }
      }
    );
  }

  getAdoptions() {
    this.adoptionService.getAll().subscribe(
      (adoptions: Adoption[]) => {
        this.adoptions = adoptions;
        if (this.adoptions.length <= 0) {
          this.noDataMsg = 'Aun no hay datos cargados, vuelva a intentarlo mas tarde!';
        }
      },
      (error) => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    // this.timerSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}

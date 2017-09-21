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

  constructor (private adoptionService: AdoptionsService) {}

  adoptions: Adoption[] = [];
  errorMessage: string;
  timerSubscription: Subscription;
  noDataMsg: string;

  ngOnInit() {
    this.timerSubscription = TimerObservable.create(0, 3000).subscribe(
      () => this.getAdoptions()
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
    this.timerSubscription.unsubscribe();
  }

}

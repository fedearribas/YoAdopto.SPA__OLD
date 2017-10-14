import { AuthService } from './../../auth/auth.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Adoption } from './../adoption.model';
import { AdoptionsService } from './../adoptions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-adoptions-container',
  templateUrl: './adoptions-container.component.html',
  styleUrls: ['./adoptions-container.component.css']
})
export class AdoptionsContainerComponent implements OnInit, OnDestroy {

  adoptions: Adoption[] = [];
  private adoptionsSubscription: AnonymousSubscription;
  private timerSubscription: AnonymousSubscription;
  isLoading = false;

  constructor (public adoptionsService: AdoptionsService,
  public authService: AuthService) {}

  ngOnInit() {
    this.subscribeToData();
  }

  private subscribeToData(): void {
    this.timerSubscription = TimerObservable.create(0, 5000).subscribe(() => this.refreshData());
  }

  private refreshData(): void {
    this.adoptionsService.getAll().subscribe(data => this.adoptions = data);
  }

  ngOnDestroy() {
    if (this.adoptionsSubscription) {
      this.adoptionsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}

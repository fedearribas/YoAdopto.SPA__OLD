import { AuthService } from './../../auth/auth.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Missing } from './../missing.model';
import { MissingService } from './../missing.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-missing-container',
  templateUrl: './missing-container.component.html',
  styleUrls: ['./missing-container.component.css']
})
export class MissingContainerComponent implements OnInit, OnDestroy {

  missing: Missing[] = [];
  private missingSubscription: AnonymousSubscription;
  private timerSubscription: AnonymousSubscription;
  isLoading = false;

  constructor (public missingService: MissingService,
  public authService: AuthService) {}

  ngOnInit() {
    this.subscribeToData();
  }

  private subscribeToData(): void {
    this.timerSubscription = TimerObservable.create(0, 5000).subscribe(() => this.refreshData());
  }

  private refreshData(): void {
    this.missingService.getAll().subscribe(data => this.missing = data);
  }

  ngOnDestroy() {
    if (this.missingSubscription) {
      this.missingSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}

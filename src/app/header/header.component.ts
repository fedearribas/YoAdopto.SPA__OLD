import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = false;
  constructor(public tokenAuthService: Angular2TokenService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.tokenAuthService);
    if (this.tokenAuthService.userSignedIn()) {
      this.tokenAuthService.validateToken().subscribe();
    }
  }

  onSignOut() {
    this.tokenAuthService.signOut();
    this.navbarCollapsed = true;
    this.router.navigate(['/']);
  }

}

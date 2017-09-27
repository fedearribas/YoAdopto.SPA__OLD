import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = false;
  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.authService);
    if (this.authService.userSignedIn()) {
      this.authService.validateToken();
    }
  }

  onSignOut() {
    this.authService.signOut();
    this.navbarCollapsed = true;
  }

}

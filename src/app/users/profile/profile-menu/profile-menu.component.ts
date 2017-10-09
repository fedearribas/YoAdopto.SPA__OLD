import { User } from './../../../auth/user.model';
import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

  user: User;
  imageUrl: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.current_user;
    this.imageUrl = this.user.image;
    if (!this.imageUrl) {
      this.imageUrl = '../../../assets/images/profile_image_default.png';
    }
  }
}

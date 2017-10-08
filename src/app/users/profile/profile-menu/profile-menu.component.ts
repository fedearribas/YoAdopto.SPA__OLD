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
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.current_user;
  }

  getProfilePicture(image: string) {
    if (!image) {
      return '../../../assets/images/profile_image_default.png';
    }
    return image.replace('unsafe: ', '').replace('http', 'https');
  }

}

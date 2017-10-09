import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../../auth/auth.service';
import { User } from './../../../auth/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  user: User;
  profileForm: FormGroup;
  imageUrl = '';
  imageSelected = false;
  isSaving = false;
  defaultImage = '../../../assets/images/profile_image_default.png';
  oauth = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.current_user;
    if (this.user.provider === 'facebook') {
      this.oauth = true;
    }
    this.initForm();
  }

  private initForm() {
    if (!this.user.image || this.user.image === '') {
      this.imageUrl = this.defaultImage;
    } else {
      this.imageUrl = this.user.image;
      this.imageSelected = true;
    }
    this.profileForm = new FormGroup({
      'name': new FormControl({value: null, disabled: this.oauth}, Validators.required),
      'image': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null)
    });
  }

  readUrl(event) {
    console.log('tst');
    if (event.target.files && event.target.files[0]) {

      console.log(event);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.imageSelected = true;
       // console.log('imagen: ' + this.imageUrl);
      }
     reader.readAsDataURL(event.target.files[0]);
    }
  }

  onClearSelectedImage() {
    this.imageUrl = this.defaultImage;
    this.imageSelected = false;
    this.profileForm.get('image').reset();
  }

  onSubmit() {
    const name = this.profileForm.value['name'];
    let image = this.imageUrl;
    if (!this.imageSelected) {
      image = '';
    }
    const phone = this.profileForm.value['phone'];
    const email = this.profileForm.value['email'];

    this.user.name = name;
    this.user.image = image;
    this.user.contact_phone = phone;
    this.user.contact_email = email;

    this.isSaving = true;
    console.log(this.user);
    this.authService.updateProfileSettings(this.user);
  }

}

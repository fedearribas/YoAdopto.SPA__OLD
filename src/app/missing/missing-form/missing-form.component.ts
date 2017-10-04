import { LocationService } from './../../shared/location.service';
import { AuthService } from './../../auth/auth.service';
import { MissingService } from './../missing.service';
import { Missing } from './../missing.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-missing-form',
  templateUrl: './missing-form.component.html',
  styleUrls: ['./missing-form.component.css']
})
export class MissingFormComponent implements OnInit {
  missingForm: FormGroup;
  miss = new Missing;
  id: number;
  imageUrl = '';
  imageSelected = false;
  editMode = false;

  isSaving = false;

  constructor(private missingService: MissingService,
              private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              private locationService: LocationService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private getLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);

          this.locationService.getLocation(position.coords.latitude, position.coords.longitude)
          .subscribe((res: any) => {
              this.miss.location = res.long_name;
            }
          );
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }

  private initForm() {

    if (this.editMode) {
      this.missingService.getMiss(this.id)
          .subscribe(res => {
            this.miss = res;
            this.imageUrl = this.miss.image;
            this.imageSelected = true;
          }
        );
      } else {
        this.getLocation();
      }

    this.missingForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null),
      'age': new FormControl(null, Validators.required),
      'ageUnit': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
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
    this.imageUrl = '';
    this.imageSelected = false;
    this.missingForm.get('image').reset();
  }

  onSubmit() {
    const name = this.missingForm.value['name'];
    const description = this.missingForm.value['description'];
    const image = this.imageUrl;
    const age = this.missingForm.value['age'];
    const ageUnit = this.missingForm.value['ageUnit'];
    const phone = this.missingForm.value['phone'];
    const email = this.missingForm.value['email'];
    const location = this.missingForm.value['location'];


    this.miss.name = name;
    this.miss.description = description;
    this.miss.image = image;
    this.miss.age = age;
    this.miss.age_measurement_unit = ageUnit;
    this.miss.contact_phone = phone;
    this.miss.contact_email = email;
    this.miss.location = location;
    this.miss.publication_type = 'missing';

    this.isSaving = true;

    if (this.editMode) {
      this.missingService.updateMissing(this.miss);
    } else {
      const user = new User(this.authService.current_user.email, this.authService.current_user.name);
      user.id = this.authService.current_user.id;
      this.miss.user = user;
      this.missingService.insertMissing(this.miss);
    }
  }

}

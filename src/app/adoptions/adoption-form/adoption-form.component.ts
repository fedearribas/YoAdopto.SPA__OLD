import { LocationService } from './../../shared/location.service';
import { AuthService } from './../../auth/auth.service';
import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit {
  adoptionForm: FormGroup;
  adoption = new Adoption;
  id: number;
  imageUrl = '';
  imageSelected = false;
  editMode = false;

  isSaving = false;

  constructor(private adoptionsService: AdoptionsService,
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

  getLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);

          this.locationService.getLocation(position.coords.latitude, position.coords.longitude)
          .subscribe((res: any) => {
              this.adoption.location = res.long_name;
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
      this.adoptionsService.getAdoption(this.id)
          .subscribe(res => {
            this.adoption = res;
            this.imageUrl = this.adoption.image;
            this.imageSelected = true;
          }
        );
      } else {
        this.getLocation();
        this.adoption.contact_phone = this.authService.current_user.contact_phone;
        this.adoption.contact_email = this.authService.current_user.contact_email;
      }

    this.adoptionForm = new FormGroup({
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
    this.adoptionForm.get('image').reset();
  }

  onSubmit() {
    const name = this.adoptionForm.value['name'];
    const description = this.adoptionForm.value['description'];
    const image = this.imageUrl;
    const age = this.adoptionForm.value['age'];
    const ageUnit = this.adoptionForm.value['ageUnit'];
    const phone = this.adoptionForm.value['phone'];
    const email = this.adoptionForm.value['email'];
    const location = this.adoptionForm.value['location'];


    this.adoption.name = name;
    this.adoption.description = description;
    this.adoption.image = image;
    this.adoption.age = age;
    this.adoption.age_measurement_unit = ageUnit;
    this.adoption.contact_phone = phone;
    this.adoption.contact_email = email;
    this.adoption.location = location;
    this.adoption.publication_type = 'adoption';

    this.isSaving = true;

    if (this.editMode) {
      this.adoptionsService.updateAdoption(this.adoption);
    } else {
      const user = new User(this.authService.current_user.email, this.authService.current_user.name);
      user.id = this.authService.current_user.id;
      this.adoption.user = user;
      this.adoptionsService.insertAdoption(this.adoption);
    }
  }

}

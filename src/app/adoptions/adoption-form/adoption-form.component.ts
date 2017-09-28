import { AuthService } from './../../auth/auth.service';
import { AdoptionsMemoryService } from './../adoptions-memory.service';
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

  constructor(private adoptionsService: AdoptionsService,
              private router: Router,
              private adoptionsMemoryService: AdoptionsMemoryService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {

    if (this.editMode) {
      this.adoption = this.adoptionsMemoryService.getAdoption(this.id);
      if (this.adoption) {
        this.imageUrl = this.adoption.image;
        this.imageSelected = true;
      } else {
        // Retrieve from api
        this.adoptionsService.getAdoption(this.id).subscribe(
          (adoption: Adoption) => {
            this.adoption = adoption;
            this.imageUrl = this.adoption.image;
            this.imageSelected = true;
          }
        );
      }
    }

    this.adoptionForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null),
      'age': new FormControl(null, Validators.required),
      'ageUnit': new FormControl(null, Validators.required),
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

    this.adoption.name = name;
    this.adoption.description = description;
    this.adoption.image = image;
    this.adoption.age = age;
    this.adoption.age_measurement_unit = ageUnit;
    this.adoption.contact_phone = phone;
    this.adoption.contact_email = email;

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

import { AdoptionsService } from './../adoptions.service';
import { Pet } from './../../shared/pet.model';
import { Adoption } from './../adoption.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit {
  adoptionForm: FormGroup;
  constructor(private adoptionsService: AdoptionsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.adoptionForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'ageUnit': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const name = this.adoptionForm.value['name'];
    const description = this.adoptionForm.value['description'];
    const image = this.adoptionForm.value['image'];
    const age = this.adoptionForm.value['age'];
    const ageUnit = this.adoptionForm.value['ageUnit'];
    const phone = this.adoptionForm.value['phone'];
    const email = this.adoptionForm.value['email'];
    const pet = new Pet(name, age, ageUnit, image, false, false);
    const adoption = new Adoption(pet, description, new Date(), phone, email);
    this.adoptionsService.insertAdoption(adoption).subscribe();
    this.router.navigate(['/']);
  }

}

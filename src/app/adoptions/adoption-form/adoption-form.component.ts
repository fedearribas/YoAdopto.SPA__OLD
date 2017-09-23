import { ImageModel } from './../../shared/image-model.model';
import { AdoptionsMemoryService } from './../adoptions-memory.service';
import { AdoptionsService } from './../adoptions.service';
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
  adoption = new Adoption;
  imageUrl = '';
  imageSelected = false;

  constructor(private adoptionsService: AdoptionsService,
              private router: Router,
              private adoptionsMemoryService: AdoptionsMemoryService) { }

  ngOnInit() {
    this.initForm();
    console.log(this.imageUrl);
  }

  private initForm() {
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
    const adoption = new Adoption(name, age, ageUnit, image, false, description, new Date(), phone, email);
    this.adoptionsService.insertAdoption(adoption).subscribe(
      (data: Adoption) => {
        this.adoptionsMemoryService.insertAdoption(data);
        console.log(adoption);
        this.router.navigate(['/adoptions']);
      }
    );

  }

}

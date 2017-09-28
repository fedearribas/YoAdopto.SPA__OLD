import { AdoptionsMemoryService } from './../adoptions/adoptions-memory.service';
import { Adoption } from './../adoptions/adoption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adoptions: Adoption[];

  constructor(private adoptionsMemoryService: AdoptionsMemoryService) { }

  ngOnInit() {

  }
}

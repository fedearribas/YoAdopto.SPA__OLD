import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updating-dummy',
  templateUrl: './updating-dummy.component.html',
  styleUrls: ['./updating-dummy.component.css']
})
export class UpdatingDummyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/user/profile']);
  }

}

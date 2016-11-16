// Imports
import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service'
@Component({
    selector: 'my-app',
    templateUrl: 'app/home/home.component.html'
})
// Component class implementing OnInit
export class HomeComponent implements OnInit {
   dataHome: {};
  // Private property for binding
  constructor(private homeService: HomeService) {

  }
  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.dataHome = this.homeService.getHomes();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

clickCounter: number = 0;
name: string = 'Starting Text';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }
  setClasses() {
    let myClasses = {
      active: this.clickCounter >3,
      notActive: this.clickCounter <= 3,
    }
    return myClasses;
  }
}



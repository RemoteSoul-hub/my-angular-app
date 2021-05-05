import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  recipes!: Object;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.GetRecipe().subscribe(data => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }

}

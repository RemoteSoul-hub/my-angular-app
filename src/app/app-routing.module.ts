import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'section1', component: Section1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

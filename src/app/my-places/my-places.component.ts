import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css']
})
@NgModule({
  declarations: [MyPlacesComponent],
  imports: [MainComponent]
})
export class MyPlacesComponent implements OnInit {
   

  constructor() {}
  ngOnInit() {

  }
}

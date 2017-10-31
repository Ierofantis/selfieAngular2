import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['../main/main.component.css']
})
@NgModule({
  declarations: [MyPlacesComponent],
  imports: [MainComponent]
})
export class MyPlacesComponent implements OnInit {
    data;
    currentItem;

    deletePlaces(x) {
      this.data.splice(x, 1);
      localStorage.removeItem('quentinTarantino');
    }

  constructor() {}
  ngOnInit() {
    this.currentItem = (localStorage.getItem('quentinTarantino')!==null) ? JSON.parse(localStorage.getItem('quentinTarantino')) : [  ];
    this.data = this.currentItem;
  // let retrievedData = localStorage.getItem("quentinTarantino");
  // this.data = JSON.parse(retrievedData);
  }
}

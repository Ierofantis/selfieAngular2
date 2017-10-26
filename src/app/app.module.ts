import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpModule } from '@angular/http';
import { MainService } from './main/main.service';
import { MyPlacesComponent } from './my-places/my-places.component';

const appRoutes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'MyPlaces', component: MyPlacesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyPlacesComponent
  ],
   exports: [MainComponent],
  imports: [
    [BrowserModule,
      RouterModule.forRoot(appRoutes)],
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

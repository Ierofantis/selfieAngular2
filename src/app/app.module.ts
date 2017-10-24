import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routes';
import { HttpModule }    from '@angular/http';
import { MainService } from './main/main.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [   
    BrowserModule,
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

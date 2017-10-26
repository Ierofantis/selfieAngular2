import { Input, ViewChild, ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from './main.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class MainComponent implements OnInit {

  @ViewChild("myCanvas") myCanvas;
  @ViewChild("camera") camera: any;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  latitude = {};
  longitude = {};
  place_id = '';
  list = [];
  data;
  location: Location;



  constructor(public _myService: MainService, location: Location, private router: Router) {
    this.location = location
  }

  ngOnInit() {
    this.videoStart();
    let retrievedData = localStorage.getItem("quentinTarantino");
    this.data = JSON.parse(retrievedData);
    let n = <any>navigator;
    if (n.geolocation) {
      n.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(position.coords.latitude);
  }

  clicked() {
    let video = this.camera.nativeElement;
    this._myService.getCoordinates(this.latitude, this.longitude).subscribe(co => {
      this.context.drawImage(video, 0, 0, 300, 400);
      this.place_id = co.results[0].formatted_address;
      console.log(this.place_id);
    });
  }

  savePlaces() {

    this.list.push(this.canvas.toDataURL());
    localStorage.setItem("quentinTarantino", JSON.stringify(this.list));
    let retrievedData = localStorage.getItem("quentinTarantino");
    this.data = JSON.parse(retrievedData);
    this.router.navigate(['/MyPlaces']);
  }

  videoStart() {
    this.canvas = this.myCanvas.nativeElement;
    let video = this.camera.nativeElement;
    this.context = this.canvas.getContext("2d");
    let ctx = this.context;
    let n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
      n.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
}

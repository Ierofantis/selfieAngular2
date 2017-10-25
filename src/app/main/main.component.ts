import { Input, ViewChild, ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from './main.service';
// import {Observable} from "rxjs";
// import {Http,HttpModule, Response} from '@angular/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []

})
export class MainComponent implements OnInit {

  @ViewChild("myCanvas") myCanvas;
  @ViewChild("camera") camera: any;
  context: CanvasRenderingContext2D;
  title: string;
  longtitude;
  latitude;


  constructor(public _myService: MainService) {}

  ngOnInit() {
    this.videoStart();
  }

  clicked() {
    let n = <any>navigator;
    let latitude;
    let longitude;    

     if (n.geolocation) {
      n.geolocation.getCurrentPosition(showPosition);    

    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {

      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    }

    this._myService.getCoordinates(latitude, longitude).subscribe(co => {
      console.log(co)
    });
  }

  videoStart() {

    let canvas = this.myCanvas.nativeElement;
    let video = this.camera.nativeElement;
    this.context = canvas.getContext("2d");
    let ctx = this.context;
    let n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
      n.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      })
        .catch(function (err) {
          console.log(err)
        });
    }
  }
}


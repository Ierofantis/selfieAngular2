import { Input, ViewChild, ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from './main.service';

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
  video: HTMLVideoElement;  
  canvas: HTMLCanvasElement;
  latitude = {}; 
  longitude = {};
  place_id = '';
  isTrue = false;  
  blist = [];
  x  = {}; 
  image;
  storage;
  types;
  lists;
  listss;
  constructor(public _myService: MainService) {}

  ngOnInit() {
    this.videoStart();
    let n = <any>navigator; 
     if (n.geolocation) {
      n.geolocation.getCurrentPosition(this.showPosition.bind(this));    
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    if (localStorage.list) {
      this.storage = localStorage.list;
      this.blist = localStorage.list;
    }
  }
  
   showPosition(position) {      
     this.latitude = position.coords.latitude;
     this.longitude = position.coords.longitude;   
    }

  clicked() {
   this.isTrue = true;   
    this._myService.getCoordinates(this.latitude, this.longitude).subscribe(co => {
      this.context.drawImage(this.video, 0, 0, 300, 400);
      this.place_id = co.results[0].formatted_address;     
       this.isTrue = false;
    });
  }

  savePlaces(){
      localStorage.setItem("canvas", this.canvas.toDataURL());        
      localStorage.setItem('currentUser', JSON.stringify(this.place_id ));      
      this.listss = localStorage.getItem("currentUser")
      this.image = localStorage.getItem("canvas");       
      // this.types = this.place_id;      
      this.blist.push(this.listss);
      console.log(this.blist)
      // localStorage.list = this.list;
      // this.storage = this.list;  
      // console.log(this.list, this.storage);    
  }

  videoStart() {

    this.canvas = this.myCanvas.nativeElement;
    this.video = this.camera.nativeElement;
    this.context = this.canvas.getContext("2d");
    let ctx = this.context;
    let n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
      n.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
      })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
}


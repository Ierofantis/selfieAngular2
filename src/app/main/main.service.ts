import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MainService {   
constructor (private http: Http) {
  	
}

    public getCoordinates(lat,long) {
      var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
      var path = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyCHf2EeOg7T167gSkNU_ljDPetPXysSMFg';
   

    return this.http.get(PROXY_URL + path).map(res => res.json());
        
    }
    
}
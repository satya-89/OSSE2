import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends WebService<any> {

  // constructor(
  //   private httpClient: HttpClient) {
  //   super(httpClient);
  // }

  getCurrentLocation(lat: any, lng: any): Observable<any> {
    const options = {
      url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true'      
    };
    return this.get(options.url);
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
      err => {
        reject(err);
      });
    });
  }

}

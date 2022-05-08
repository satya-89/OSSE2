import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable({
  providedIn: 'root'
})
export class StudentFilterService extends WebService<any>{

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getCities(): Observable<any> {
    const options = {
      url: Routes.GET_CITIES()
    };
    return this.get(options);
  }

  getCityById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_CITY_BY_STATE_ID(id)
    };
    return this.get(options);
  }
  
}


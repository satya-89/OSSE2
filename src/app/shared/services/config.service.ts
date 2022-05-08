import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends WebService<any> {

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getTutorById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTOR_BY_ID(id)
    };
    return this.get(options);
  }

  getStates(): Observable<any> {
    const options = {
      url: Routes.GET_STATES()
    };
    return this.get(options);
  }

  getCities(): Observable<any> {
    const options = {
      url: Routes.GET_LOCAL_CITIES()
    };
    return this.get(options);
  }

  getCityByStateId(id: any): Observable<any> {
    const options = {
      url: Routes.GET_CITY_BY_STATE_ID(id)
    };
    return this.get(options);
  }

  getCityByName(cityName: any): Observable<any> {
    const options = {
      url: Routes.GET_CITY_BY_NAME(cityName),
      isLoaderRequired: false
    };
    return this.get(options);
  }

  getCategory(): Observable<any> {
    const options = {
      url: Routes.GET_CATEGEORIES()
    };
    return this.get(options);
  }

  getSubjects(): Observable<any> {
    const options = {
      url: Routes.GET_SUBJECTS()
    };
    return this.get(options);
  }

  getFilterResults(currentPage: any, size: any, data: any): Observable<any> {
    let urlParameters = Object.entries(data).map(e => e.join('=')).join('&');
    const options = {
      url: Routes.TUTOR_SEARCH(currentPage, size, urlParameters)
    };
    return this.get(options);
  }

  getTutorGuarantorById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTOR_GUARANTOR_BY_ID(id)
    };
    return this.get(options);
  }

  getTutorMapById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTOR_MAP_BY_ID(id)
    };
    return this.get(options);
  }

  getTutorAddressById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_TUTOR_ADDRESS_BY_ID(id)
    };
    return this.get(options);
  }

}

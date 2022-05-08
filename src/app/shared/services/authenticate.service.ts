import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WindowRefService } from './window-ref.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService extends WebService<any> {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    protected windowRef: WindowRefService,
    private loaderService: LoaderService) {
    super(httpClient, loaderService);
  }


  register(data) {
    return this.post({
      url: Routes.REGISTER(),
      params: data,
    });
  }

  login(loginData: any, user: string) {
    const options = {
      url: Routes.LOGIN(),
      params: loginData
    };
    const response = { "id": 119, "userId": "admin", "password": "Hansa123", "type": "TUTOR", "refId": 100, "active": true, "detail": { "id": 100, "name": "Hansa", "location": "Hyderabad", "mobile": "9876543210", "email": "admin@hansa.com", "category": null, "classcategory": null, "particularClass": null, "subjects": null, "experience": "6-10", "qualification": "B.TECH", "city": "Hyderabad", "state": "Andhra Pradesh", "gender": "MALE", "jobType": "FULLTIME", "sequenceId": "T/2019/100", "otp": "1576", "otpValidated": true, "fluencyInEnglish": null, "dob": "1990-11-11", "whatsappNumber": "9876543210", "defaultZip": null, "types": null, "partTimeReason": "", "mapping": null, "education": null, "zipCode": null, "experiences": null, "credit": 500, "imageUrl": "https://s3.ap-south-1.amazonaws.com/mytadata/PHOTO/tutor_100.png", "age": 0, "reviews": null }, "createdOn": null, "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJoYW5zYWEiLCJyb2xlIjoiVFVUT1IiLCJpc3MiOiJoYW5zYWEiLCJuYW1lIjoiOTk0ODQxNTM4MCIsImV4cCI6MTU4NDQ0Mzc0MiwidXNlcklkIjoxMTl9.1bP_AieqM91EoGhm_c-Dyyy26mO5iSStyPiEidDj8HUG4fdPYU5DdFmKSMZS-9wJL_q0Pc1dy2irDPkOgLikYQ" };
    const myObservable = of(response);
    localStorage.setItem('userinfo', JSON.stringify(response));
    localStorage.setItem('user', JSON.stringify(response['detail']));
    localStorage.setItem('token', JSON.stringify(response['token']));
    return myObservable;

    // return this.post(options)
    //   .pipe(map(data => {
    //     if (data && data['token']) {
    //       localStorage.setItem('userinfo', JSON.stringify(data));
    //       localStorage.setItem('user', JSON.stringify(data['detail']));
    //       localStorage.setItem('token', JSON.stringify(data['token']));
    //       return data;
    //     }
    //   }));
  }

  getToken() {
    let obj = JSON.parse(localStorage.getItem('token'));
    if (obj) {
      return obj;
    } else {
      this.router.navigate(['login']);
    }
  }

  getUser() {
    let obj = JSON.parse(localStorage.getItem('user'));
    if (obj) {
      return obj;
    } else {
      this.router.navigate(['login']);
    }
  }


  isAuthenticated(): boolean {
    return true;
  }

  logout() {
    console.log('on logout end the loader');
    localStorage.removeItem('userinfo');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

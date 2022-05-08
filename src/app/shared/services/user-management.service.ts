import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class UserManagementService extends WebService<any>{

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getCountries() {
    return this.get({
      url: 'assets/json/countries.json'
    });
  }

  getStudents(): Observable<any> {
    return this.get({
      url: Routes.GET_STUDENTS()
    });
  }

  getTutors(currentPage: any, size: any): Observable<any> {
    return this.get({
      url: Routes.GET_TUTORS(currentPage, size)
    });
  }

  getClasses(): Observable<any> {
    return this.get({
      url: Routes.GET_CLASSES()
    });
  }

  updateClass(data) {
    return this.post({
      url: Routes.POST_CLASS(),
      params: data
    });
  }

  getSubjects(): Observable<any> {
    return this.get({
      url: Routes.GET_SUBJECTS()
    });
  }

  getNearByTutors(): Observable<any> {
    return this.get({
      url: Routes.GET_NEAR_BY_TUTORS()
    });
  }
}


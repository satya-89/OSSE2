import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class StudentService extends WebService<any>{

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getClasses(): Observable<any> {
    const options = {
      url: Routes.GET_CLASSES()
    };
    return this.get(options);
  }

  updateClass(data: any) {
    const options = {
      url: Routes.POST_CLASS(),
      params: data
    };
    return this.post(options);
  }

  getSubjects(): Observable<any> {
    const options = {
      url: Routes.GET_SUBJECTS()
    };
    return this.get(options);
  }

  updateSubject(data: any) {
    const options = {
      url: Routes.POST_SUBJECT(),
      params: data
    };
    return this.post(options);
  }

  getNearByTutors(): Observable<any> {
    const options = {
      url: Routes.GET_NEAR_BY_TUTORS()
    };
    return this.get(options);
  }
}

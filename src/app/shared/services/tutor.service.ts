import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class TutorService extends WebService<any>{

  getTutors(currentPage: any, size: any) {
    return this.get({
      url: Routes.GET_TUTORS(currentPage, size)      
    });    
  }

  getTutorsById(id: any) {
    return this.get({
      url: Routes.GET_TUTORS_BY_ID(id)
    });
  }

  getClasses() {
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

  getSubjects() {
    return this.get({
      url: Routes.GET_SUBJECTS()
    });
  }

  getNearByTutors() {
    return this.get({
      url: Routes.GET_NEAR_BY_TUTORS()
    });
  }

  getTutorsByCityMobile(city: any, mobileNumber: any, currentPage: any, size: any) {
    return this.get({
      url: Routes.GET_TUTORS_BY_CITY_MOBILE(city, mobileNumber, currentPage, size)
    });
  }

  getTutorsByCity(city: any, currentPage: any, size: any) {
    return this.get({
      url: Routes.GET_TUTORS_BY_CITY(city, currentPage, size)
    });
  }

  getTutorsByMobile(mobileNumber: any, currentPage: any, size: any) {
    return this.get({
      url: Routes.GET_TUTORS_BY_MOBILE(mobileNumber, currentPage, size)
    });
  }

}


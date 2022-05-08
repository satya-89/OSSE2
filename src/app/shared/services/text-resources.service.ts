import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Routes } from '../classes/routes';

@Injectable()
export class TextResourcesService extends WebService<any>{

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getAboutus(type: string): Observable<any> {
    return this.get({
      url: Routes.GET_ABOUTUS(type)
    });
  }

  addAboutus(data: any) {
    return this.post({
      url: Routes.ADD_ABOUTUS(data.textType),
      params: data.content
    });
  }

  deleteAboutus(data: any) {
    return this.post({
      url: Routes.DELETE_ABOUTUS(data.textType),
      params: {}
    });
  }

  getWhyus(type: string): Observable<any> {
    return this.get({
      url: Routes.GET_WHYUS(type)
    });
  }

  addWhyus(data: any) {
    return this.post({
      url: Routes.ADD_WHYUS(data.textType),
      params: data.content
    });
  }

  deleteWhyus(data: any) {
    return this.post({
      url: Routes.DELETE_WHYUS(data.textType),
      params: {}
    });
  }

  getPrivacyPolicy(type: string): Observable<any> {
    return this.get({
      url: Routes.GET_PRIVACYPOLICY(type)
    });
  }

  addPrivacyPolicy(data: any) {
    return this.post({
      url: Routes.ADD_PRIVACYPOLICY(data.textType),
      params: data.content
    });
  }

  deletePrivacyPolicy(data: any) {
    return this.post({
      url: Routes.DELETE_PRIVACYPOLICY(data.textType),
      params: {}
    });
  }

  getTermsNconditionsTutor(type: string): Observable<any> {
    return this.get({
      url: Routes.GET_TERMSnCONDITIONSTUTOR(type)
    });
  }

  editTermsNconditionsTutor(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: data.content
    };
    return this.post(options);
  }

  deleteTermsNconditionsTutor(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: {}
    };
    return this.post(options);
  }

  getTermsNconditionsStudent(type: string): Observable<any> {
    const options = {
      url: Routes.GET_TERMSnCONDITIONSTUTOR(type)
    };
    return this.get(options);
  }

  editTermsNconditionsStudent(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: data.content
    };
    return this.post(options);
  }

  deleteTermsNconditionsStudent(data: any) {
    const options = {
      url: Routes.EDIT_TERMSnCONDITIONSTUTOR(data.textType),
      params: {}
    };
    return this.post(options);
  }

  
}

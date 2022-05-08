import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService extends WebService<any> {

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getFaqs(type: any): Observable<any> {
    const options = {
      url: Routes.GET_FAQ(type)
    };
    return this.get(options);
  }

  addFaq(data: any): Observable<any> {
    const options = {
      url: Routes.ADD_FAQ(),
      params: data
    };
    return this.post(options);    
  }

  editFaq(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_FAQ(),
      params: data
    };
    return this.post(options);    
  }

  deleteFaq(data: any): Observable<any> {
    const options = {
      url: Routes.DELETE_FAQ(data.id),
      params: {}
    };
    return this.post(options);    
  }
}

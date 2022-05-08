import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategeoriesService extends WebService<any> {

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router) {
  //   super(httpClient);
  // }

  getConfigCategeories(): Observable<any> {
    const options = {
      url: Routes.GET_CONFIG_CATEGEORIES()
    };
    return this.get(options);
  }

  getCategeories(): Observable<any> {
    const options = {
      url: Routes.GET_CATEGEORIES()
    };
    return this.get(options);
  }

  addCategeory(data: any): Observable<any> {
    const options = {
      url: Routes.ADD_CATEGORY(),
      params: data
    };
    return this.post(options);    
  }

  editCategeories(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_CATEGEORIES(),
      params: data
    };
    return this.post(options);
  }

  addClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.ADD_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.post(options);    
  }

  editClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.EDIT_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.put(options);    
  }

  deleteClassToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.DELETE_CLASS_TO_CATEGORY(id),
      params: data
    };
    return this.delete(options);    
  }

  addSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.ADD_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.post(options);    
  }

  editSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.EDIT_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.put(options);    
  }

  deleteSubjectToCategeories(data: any, id: any): Observable<any> {
    const options = {
      url: Routes.DELETE_SUBJECT_TO_CATEGORY(id),
      params: data
    };
    return this.delete(options);    
  }

}

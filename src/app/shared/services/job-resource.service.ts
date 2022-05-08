import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';

import { Routes } from '../classes/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobResourceService extends WebService<any> {

  getStudentEnquiry(page: any, size: any): Observable<any> {
    const options = {
      url: Routes.GET_STUDENT_ENQUIRY(page, size)
    };
    return this.get(options);
  }

  getStudentEnquiryById(id: any): Observable<any> {
    const options = {
      url: Routes.GET_STUDENT_ENQUIRY_BY_ID(id)
    };
    return this.get(options);
  }

  updateStudentEnquiryByStatus(id: any, status: any): Observable<any> {
    const options = {
      url: Routes.UPDATE_STUDENT_ENQUIRY_BY_STATUS(id, status)      
    };
    return this.put(options);
  }  

  addStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.ADD_STUDENT_ENQUIRY(),
      params: data
    };
    return this.post(options);    
  }

  editStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.EDIT_STUDENT_ENQUIRY(data.id),
      params: data
    };
    return this.post(options);    
  }

  deleteStudentEnquiry(data: any): Observable<any> {
    const options = {
      url: Routes.DELETE_STUDENT_ENQUIRY(data.id),
      params: {}
    };
    return this.post(options);
  }
}

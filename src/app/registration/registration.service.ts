import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { gradeSubject, User, userInfo } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  addUser(formData: any) {
   
  const body: userInfo = this.mapUserData(formData);


    return this.http.post<any>(`${environment.apiUrl}/api/insert-user-detail`, body)
      .pipe(map(user => {

        return user;
      }));
  }


  getGrades() {


    return this.http.get<any>(`${environment.apiUrl}/api/get-grade`)
      .pipe(map(grades => {

        return grades;
      }));
  }

  ///api/get-subject
  getAllSubjects() {


    return this.http.get<any>(`${environment.apiUrl}/api/get-subject`)
      .pipe(map(subs => {

        return subs;
      }));
  }


  getAllRoles() {


    return this.http.get<any>(`${environment.apiUrl}/api/get-role`)
      .pipe(map(roles => {

        return roles;
      }));
  }
  ///api/get-role

  mapUserData(userInfo: any) {
    let userPayload: userInfo;
    let gradeSubject : gradeSubject[] = [];

    userInfo.gradeSubjects.forEach((element: { gradeId: any; subjectName: any; }) => {
      gradeSubject.push( {grade : element.gradeId , subject: element.subjectName})
    });

    console.log("gradeSubject",  gradeSubject);
    console.log("request mapp", userInfo);
    userPayload = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
      addressLine1: userInfo.addressLine1,
      addressLine2: userInfo.addressLine2,
      role: userInfo.role.role_id,
      city: userInfo.city,
      state: userInfo.state,
      zipcode: userInfo.zipcode,
      gradeSubjects: gradeSubject
    }

    return userPayload;
  }

}

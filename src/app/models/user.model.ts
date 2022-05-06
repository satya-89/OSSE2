import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from "@angular/platform-browser-dynamic";

export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    authdata?: string;
}

export interface userInfo {
    firstName: string,
    password: string,
    lastName: string,
    phoneNumber: string,
      email: string,
      addressLine1: string,
      addressLine2: string,
      role: string,
      city: string,
      state: string,
      zipcode: string,
      gradeSubjects: gradeSubject[]
}

export interface gradeSubject{
    grade: string,
    subject: string
} 
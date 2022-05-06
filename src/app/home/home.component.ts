import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  loading = false;
  submitted = false;
  returnUrl: string = '/login';
  error = '';

  hideSubjects = true;
  hideResults = true;
  gradeSubjectList: any = [];
  gradeList: any = [];
  subjectList:any = [];
  enteredCity:string = '';
  searchResults:any = [];
  @ViewChild('enteredCity', {static: true}) enteredCityElement: ElementRef | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardDataService,
    //private reactiveFormsModule: ReactiveFormsModule
  ) {
    this.enteredCityElement = this.enteredCityElement;
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {

    this.dashboardService.getGrades()
    .pipe(first())
    .subscribe(
        data => {
          this.gradeList = data;

        },
        error => {
            this.error = error;
        });

    this.dashboardService.getSubjects()
    .pipe(first())
    .subscribe(
        data => {
          this.subjectList = data;
            console.log("get subjects", data);

        },
        error => {
            this.error = error;
        });
  }

  roleList: any = [{ id: 1, name: 'student' }, { id: 2, name: 'facilitator' }];
  //gradeList: any = [{ id: 1, name: 'grade1' }, { id: 2, name: 'grade2' } , { id: 3, name: 'grade3' }];
  //subjectList: any =  [{ id: 1, name: 'matchs' }, { id: 2, name: 'science' }];

  dashboardFormData = this.fb.group({
   

    city: ['', Validators.required],
    grade: ['', Validators.required],
    subject: ['', Validators.required]
  })

  get f() { return this.dashboardFormData.controls; }


  selectedGrade: string = '';
  selectedSubject: string = '';

  //event handler for the select element's change event
  selectGrade(event: any) {
    //update the ui
    this.selectedGrade = event.target.value;
    this.hideSubjects = false;
  }

   //event handler for the select element's change event
   selectSubject(event: any, grade: string) {
    //update the ui
    this.selectedGrade = event.target.value + '-' + grade;
    this.selectedSubject = event.target.value;
    this.gradeSubjectList.push(this.selectedGrade);

    this.hideSubjects = false;
  }

  // Submit Registration Form
  onSubmit(){
  this.submitted = true;
  this.loading = true;
 
  //console.log("form values", this.dashboardFormData.value);
  this.selectedGrade;
  this.selectedSubject;
  this.enteredCity = this.enteredCityElement?.nativeElement.value;
  // stop here if form is invalid
  /* if (this.dashboardFormData && this.dashboardFormData.invalid) {
      return;
  } */

  //getTutors

  const gradeId = this.f.grade.value;
  const subjectName = this.f.subject.value;
  this.dashboardService.getTutors(gradeId.grade, subjectName.name , this.f.city.value)
  .pipe(first())
  .subscribe(
      data => {
       
        this.searchResults = data;
         // console.log("search", this.returnUrl);
       //   this.router.navigate([this.returnUrl]);
          this.loading = false;
      },
      error => {
          this.error = error;
          this.loading = false;
      });

  // let apiResponse = [{
  //   "phone":"1234567890",
  //   "first_name":"Manoj",
  //   "last_name":"Mehra",
  //   "grade":"5th Grade",
  //   "subject_name":"Chemistry"
  //   },
  //   {
  //     "phone":"1234567891",
  //     "first_name":"Sridhar",
  //     "last_name":"Reddy",
  //     "grade":"7th Grade",
  //     "subject_name":"Chemistry"
  //     },
  //     {
  //       "phone":"1234567892",
  //       "first_name":"Shantanu",
  //       "last_name":"Ganappa",
  //       "grade":"9th Grade",
  //       "subject_name":"Maths"
  //       },
  //       {
  //         "phone":"1234567893",
  //         "first_name":"Chomu",
  //         "last_name":"Swami",
  //         "grade":"3th Grade",
  //         "subject_name":"Chemistry"
  //         },
  //         {
  //           "phone":"1234567894",
  //           "first_name":"Niranjan",
  //           "last_name":"Das",
  //           "grade":"1th Grade",
  //           "subject_name":"Physics"
  //           }];

    this.loading = false;
   // this.searchResults = apiResponse;
    this.hideResults = false;

  /* this.dashboardService.performSearch(this.dashboardFormData.value)
      .pipe(first())
      .subscribe(
          data => {
              console.log("daat", this.returnUrl);
              this.router.navigate([this.returnUrl]);
              this.loading = false;
          },
          error => {
              this.error = error;
              this.loading = false;
          }); */
 }
}


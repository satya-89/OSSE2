import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './registration.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  loading = false;
  submitted = false;
  returnUrl: string = '/login';
  error = '';
  loadpage = false;

  hideSubjects = true;
  gradeSubjectList: any = [];


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
    //private reactiveFormsModule: ReactiveFormsModule
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {

    setTimeout(() => {
      this.populateDropdown();
      this.loadpage = true;
    }, 2000);//wait 2 seconds

  }




  roleList: any = [{ id: 1, name: 'student' }, { id: 2, name: 'facilitator' }];
  gradeList: any = [{ id: 1, name: 'grade1' }, { id: 2, name: 'grade2' }, { id: 3, name: 'grade3' }];
  subjectList: any = [{ id: 1, name: 'matchs' }, { id: 2, name: 'science' }];

  registrationForm = this.fb.group({

    // fullName: this.fb.group({
    //   firstName: [''],
    //   lastName: ['']
    // }),
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [''],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required, Validators.maxLength(10)],
    // address: this.fb.group({
    addressLine1: [''],
    addressLine2: [''],
    city: ['', Validators.required],
    state: [''],
    zipcode: [''],
    // }),
    role: ['', Validators.required],
    gradeSubjects: [this.gradeSubjectList, Validators.required],
    addDynamicElement: this.fb.array([])
  })

  get f() { return this.registrationForm.controls; }


  selectedGrade: string = '';

  //event handler for the select element's change event
  selectGrade(event: any) {

    console.log("hello" , event.target.value);
    //update the ui
    this.selectedGrade = event.target.value;
    this.hideSubjects = false;
  }

  //event handler for the select element's change event
  selectSubject(event: any, grade: string) {
    //update the ui
    // this.selectedGrade = event.target.value + '-' + grade;
    //name

    debugger;
    const gradeObject = this.gradeList.find((element: { description: string; }) => element.description === this.selectedGrade);
    const subObject = this.subjectList.find((element: { description: string; }) => element.description == event.target.value);
    


    const gradSubJson = {
      "gradeId":  gradeObject ? gradeObject.grade : 0,
      "grade": this.selectedGrade,
      "subject": event.target.value,
      "subjectName": subObject ? subObject.name : ""
    }




    this.gradeSubjectList.push(gradSubJson);

    this.hideSubjects = false;
  }

  ///insert-user-grade-subjects


  // selectRole(event: any) {
  //   const index = this.roleList.findIndex(item => item.id == event.target.value);
  //   if (index === -1) {
  //     this.customerForm.controls.orders.setValue(null);
  //     return;
  //   }
  //   this.filteredOrders = this.getCustomersOrders(this.customers[index]);
  //   this.customerForm.controls.orders.setValue(this.filteredOrders[0]);
  // }


  // Submit Registration Form
  onSubmit() {

    //   this.loading = true;

    //   this.registrationService.addUser
    //   if(!this.registrationForm.valid) {
    //     alert('Please fill all the required fields to create a super hero!')
    //     return false;
    //   } else {

    //     this.submitted = true;
    //     this.router.navigate([this.returnUrl]);
    //   console.log("form values", this.registrationForm.value);
    //   return true;
    //   }



    this.submitted = true;
    console.log("form values", this.registrationForm.value);
    // stop here if form is invalid
    // if (this.registrationForm && this.registrationForm.invalid) {
    //     return;
    // }

    this.loading = true;



    this.registrationService.addUser(this.registrationForm.value)
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
        });
  }

  populateDropdown() {

    this.registrationService.getGrades()
      .pipe(first())
      .subscribe(
        data => {
          this.gradeList = data;
          console.log("get grades", data);

        },
        error => {
          this.error = error;
        });

    this.registrationService.getAllSubjects()
      .pipe(first())
      .subscribe(
        data => {
          this.subjectList = data;
          console.log("get sub", data);

        },
        error => {
          this.error = error;
        });



    this.registrationService.getAllRoles()
      .pipe(first())
      .subscribe(
        data => {
          this.roleList = data;
          console.log("get sub", data);

        },
        error => {
          this.error = error;
        });
  }

}


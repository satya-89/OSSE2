import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobResourceService } from '../../services/job-resource.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-student-enquiry',
  templateUrl: './view-student-enquiry.component.html',
  styleUrls: ['./view-student-enquiry.component.scss']
})
export class ViewStudentEnquiryComponent implements OnInit {

  enquiryId: string;
  studentEnquiryDetails: any;

  submitted = false;
  studentEnquiryDetailsForm: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;

  constructor(
    private route: ActivatedRoute,
    private jobResourceService: JobResourceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.enquiryId = params['seqId'].split('^').join('/');
      this.loadStudentEnquires(this.enquiryId);
    });
  }

  loadStudentEnquires(enquiryId: any) {
    this.jobResourceService.getStudentEnquiryById(enquiryId).subscribe( data =>{
      this.studentEnquiryDetails = data;
      this.createForm(this.studentEnquiryDetails);
    });       
  }

  createForm(studentEnquiryDetails) {
    this.studentEnquiryDetailsForm = this.formBuilder.group({
      name: [ studentEnquiryDetails.student.name, Validators.required],
      email: [ studentEnquiryDetails.student.email, Validators.required],
      subject: [ '', Validators.required],
      message: [ '', Validators.required]
    });
  }
  
  get formControls() { 
    return this.studentEnquiryDetailsForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.studentEnquiryDetailsForm.valid) {
            
    }
  }

}

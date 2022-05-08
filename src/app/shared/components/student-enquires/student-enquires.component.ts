import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalService } from '../../services/modal.service';
import { ViewTutorComponent } from '../view-tutor/view-tutor.component';
import { StudentFilterService } from '../../services/student-filter.service';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { UserManagementService } from '../../services/user-management.service';
import { JobResourceService } from '../../services/job-resource.service';

@Component({
  selector: 'app-student-enquires',
  templateUrl: './student-enquires.component.html',
  styleUrls: ['./student-enquires.component.scss']
})
export class StudentEnquiresComponent implements OnInit {

  /* pagination Info */
  p: number = 1;
  total: number;
  loading: boolean;

  itemsPerPage = 5;
  currentPage = 0;
  totalItems = 0;
  isNextPage = true;
  totalPages = 0;

  direction: number;
  isDesc: any;
  column: any;

  studentslist: Array<any> = [];

  searchEnquiry: string;
  searchMobile: string;
  searchTextLocation: string;
  searchTextStatus: string;

  cities: any[] = [];
  status = ['Open', 'Demo Schedule', 'Demo Taken', 'Confirm', 'Postponed', 'Cancel'];

  constructor(
    private router: Router,
    private jobResourceService: JobResourceService,
    private studentService: StudentService,
    private tutorService: TutorService,
    private modalService: ModalService,
    private _userManagementService: UserManagementService,
    private _studentFilterService: StudentFilterService,
  ) { }

  ngOnInit() {
    this.getPage(this.currentPage);
  }

  getPage(page: number) {
    this.currentPage = page - 1 == -1 ? 0 : page - 1;
    if (this.isNextPage && this.totalPages >= this.currentPage) {
      this.loadStudentEnquires(this.currentPage, this.itemsPerPage);
    }
  }

  loadStudentEnquires(currentPage: any, size: any) {
    this.jobResourceService.getStudentEnquiry(currentPage, size).subscribe(data => {
      this.studentslist = data.contents;
      this.totalItems = data.totalSize;
      this.isNextPage = data.next;
      this.totalPages = data.page;
    });
  }

  ViewEnquiry(enquiry: any) {
    let enquiryURL = enquiry.sequenceId.split('/').join('^');
    this.router.navigate(['dashboard/student/view/' + enquiryURL]);

    // const initialState = {
    //   title: 'View Tutor',
    //   closeBtnName: 'OK',
    //   modelData: tutor
    // };
    // const modalRef: BsModalRef = this.modalService.showModal(ViewTutorComponent, { initialState, class: 'modal-lg' });
    // modalRef.content.onClose.subscribe((result: any) => {
    //   if (result) {

    //   }
    // });
  }

  clearText() {
    this.searchEnquiry = '';
    this.searchMobile = '';
    this.searchTextLocation = undefined;
    this.searchTextStatus = undefined;
  }

  sort(property: any) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  


}



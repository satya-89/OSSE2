import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';

import { CategeoriesService } from '../../../../shared/services/categeories.service';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-subject-categories',
  templateUrl: './subject-categories.component.html',
  styleUrls: ['./subject-categories.component.scss']
})
export class SubjectCategoriesComponent implements OnInit {
  hideme = [];
  isCollapse = [];
  
  newCategories = [];
  primaryCategories = [];
  subjectCategories = [];
    
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private _categeoriesService: CategeoriesService,
    private _studentService: StudentService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadCategories();    
  }

  loadCategories() {
    this._categeoriesService.getCategeories().subscribe( (data) => {
      this.primaryCategories = data;
      this.loadSubjects();
    });
  }
  
  loadSubjects() {
    this._studentService.getSubjects().subscribe( data => {
      this.subjectCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      this.loadSubjectswithCategories();
    });
  }

  loadSubjectswithCategories() {
    this.primaryCategories.forEach(elem => {
      elem.subjects = this.filterSubjects(elem.id);
    });
  }

  filterSubjects(categorySubjectId: any) {
    return this.subjectCategories.filter((item: any) => item.classGroupId == categorySubjectId);    
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}



import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CategeoriesService } from '../../../services/categeories.service';
import { StudentService } from '../../../services/student.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-class-categories',
  templateUrl: './class-categories.component.html',
  styleUrls: ['./class-categories.component.scss']
})
export class ClassCategoriesComponent implements OnInit {

  hideme = [];
  isCollapse = [];

  newCategories = [];
  primaryCategories = [];
  classCategories = [];

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
    this._categeoriesService.getCategeories().subscribe((data) => {
      this.primaryCategories = data;
      this.loadClasses();
    });
  }

  loadClasses() {
    this._studentService.getClasses().subscribe(data => {
      this.classCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      this.loadClasseswithCategories();
    });
  }

  loadClasseswithCategories() {
    this.primaryCategories.forEach(elem => {
      elem.classes = this.filterClasses(elem.id);
    });
  }

  filterClasses(categoryClassid: any) {
    return this.classCategories.filter((item: any) => item.classGroupId == categoryClassid);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}


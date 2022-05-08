import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalService } from '../../services/modal.service';
import { ViewTutorComponent } from '../view-tutor/view-tutor.component';

@Component({
  selector: 'app-tutorslist',
  templateUrl: './tutorslist.component.html',
  styleUrls: ['./tutorslist.component.scss']
})

export class TutorslistComponent implements OnInit {

  tutorslist: Array<any> = [];
  searchTutor: string;
  searchName: string;
  currentPage = 0;
  size = 10;

  constructor(
    private tutorService: TutorService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadTutors(this.currentPage, this.size);
  }

  loadTutors(currentPage: any, size: any) {
    this.tutorService.getTutors(currentPage, size).subscribe(data => {
      data.contents[0].name = 'hansa';
      data.contents[0].mobile = '9988776655';
      data.contents[0].whatsappNumber = '9988776655';
      this.tutorslist = data.contents;      
    });
  }

  ViewTutor(tutor: any) {
    const initialState = {
      title: 'View Tutor',
      closeBtnName: 'OK',
      modelData: tutor
    };
    const modalRef: BsModalRef = this.modalService.showModal(ViewTutorComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {

      }
    });
  }



}


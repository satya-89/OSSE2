import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.scss']
})
export class ViewTutorComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  viewTutor: any;

  constructor(
    public bsModalRef: BsModalRef,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this.viewTutor = this.modelData;
  }

  onSubmit() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

}



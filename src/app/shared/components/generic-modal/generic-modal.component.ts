import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  onClose: Subject<any>;

  modalOptions: any = {};

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  submit() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  close() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }

}

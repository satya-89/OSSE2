import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-aboutus',
  templateUrl: './edit-aboutus.component.html',
  styleUrls: ['./edit-aboutus.component.scss']
})
export class EditAboutusComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  defaultContent: any;
  
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.defaultContent = this.modelData.defaultContent;
  }

  onContentChange(event: string) {
    this.defaultContent = event;
  }
  
  onSubmit() {
    this.onClose.next(this.defaultContent);
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

}





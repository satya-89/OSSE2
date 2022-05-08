import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalService } from '../../../../shared/services/modal.service';
import { EditAboutusComponent } from '../edit-aboutus/edit-aboutus.component';
import { TextResourcesService } from '../../../../shared/services/text-resources.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  defaultContentold = '';
  textResource = 'ABOUT_HANSA';
  lastUpdated: any;

  defaultContent = '';

  constructor(
    private modalService: ModalService,
    private textResourcesService: TextResourcesService
  ) { }

  ngOnInit() {
    this.loadAboutus();
  }

  loadAboutus() {
    this.textResourcesService.getAboutus(this.textResource).subscribe(data => {
      if (data == null || data.content == null) {
        this.defaultContent = '<p>Please Write Aboutus</p>';
      } else {
        this.defaultContent = data.content;
      }
      if (data.lastUpdated == null) {
        this.lastUpdated = '';
      } else {
        this.lastUpdated = data.lastUpdated;
      }
      document.getElementById('text-output').innerHTML = this.defaultContent;
    });
  }

  editAboutus() {
    const initialState = {
      title: 'Edit Aboutus',
      closeBtnName: 'Update',
      modelData: {
        defaultContent: this.defaultContent
      }
    };
    const modalRef: BsModalRef = this.modalService.showModal(EditAboutusComponent, { initialState, class: 'modal-lg' });
    modalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        const content = {
          "content": result,
          "textType": this.textResource
        };
        this.textResourcesService.addAboutus(content).subscribe(data => {
          this.loadAboutus();
        });
      }
    });
  }

  clearAboutus() {
    const content = {
      "content": "<p>Please enter About us.</p>",
      "textType": this.textResource
    };
    this.textResourcesService.deleteAboutus(content).subscribe(data => {
      this.loadAboutus();      
    });
  }

}
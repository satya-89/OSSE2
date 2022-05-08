import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PellEditorComponent } from './components/pell-editor/pell-editor.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { StudentService } from './services/student.service';
import { BsModalService, BsModalRef, ModalModule, TypeaheadModule } from 'ngx-bootstrap';
import { ModalService } from './services/modal.service';
import { WebService } from './services/web.service';
import { WindowRefService } from './services/window-ref.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { RouterModule } from '@angular/router';
import { UserManagementService } from './services/user-management.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchTextPipe } from './pipes/search-text.pipe';
import { OrderBy } from './pipes/order-by.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { GenericPaginationComponent } from './components/generic-pagination/generic-pagination.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ClassCategoriesComponent } from './components/categories/class-categories/class-categories.component';
import { SubjectCategoriesComponent } from './components/categories/subject-categories/subject-categories.component';
import { TutorslistComponent } from './components/tutorslist/tutorslist.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { TutorService } from './services/tutor.service';
import { ViewTutorComponent } from './components/view-tutor/view-tutor.component';
import { TextResourcesService } from './services/text-resources.service';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { StudentFilterService } from './services/student-filter.service';
import { SelectboxPipe } from './pipes/selectbox.pipe';
import { StudentEnquiresComponent } from './components/student-enquires/student-enquires.component';
import { ViewStudentEnquiryComponent } from './components/view-student-enquiry/view-student-enquiry.component';
import { MailBoxComponent } from './components/mail-box/mail-box.component';

import { SortByPipe } from './pipes/sort-by.pipe';
import { ConfigService } from './services/config.service';
import { LocationService } from './services/location.service';
import { TextFilterPipe } from './pipes/text-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot(),   
    NgxPaginationModule,
    JsonpModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    ProfileComponent,
    GenericModalComponent,
    GenericPaginationComponent,
    SearchFilterPipe,
    SearchTextPipe,
    OrderBy,
    DateFormatPipe,
    SortByPipe,
    NotificationComponent,
    ClassCategoriesComponent,
    SubjectCategoriesComponent,
    TutorslistComponent,
    StudentslistComponent,
    ViewTutorComponent,
    SelectboxPipe,
    StudentEnquiresComponent,
    ViewStudentEnquiryComponent,
    MailBoxComponent,
    TextFilterPipe,
  ],
  exports: [
    TutorslistComponent,
    StudentslistComponent,
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    ProfileComponent,
    GenericModalComponent,
    GenericPaginationComponent,
    SearchFilterPipe,
    SearchTextPipe,
    OrderBy,
    SortByPipe,
    DateFormatPipe,
    SelectboxPipe,
    NotificationComponent,
    ClassCategoriesComponent,
    SubjectCategoriesComponent,
    ViewTutorComponent,
    StudentEnquiresComponent,
    MailBoxComponent
  ],
  entryComponents: [
    ViewTutorComponent
  ],
  providers: [
    BsModalService,
    BsModalRef,
    ModalService,
    WebService,
    WindowRefService,
    LocationService,
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    ConfigService,
    StudentService,
    TutorService,
    UserManagementService,
    TextResourcesService,
    StudentFilterService
  ]
})
export class SharedModule { }

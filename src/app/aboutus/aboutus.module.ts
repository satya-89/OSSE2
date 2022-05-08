import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './aboutus.routing';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EditAboutusComponent } from './components/edit-aboutus/edit-aboutus.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        AboutusComponent,
        EditAboutusComponent
    ],
    entryComponents: [
        EditAboutusComponent
    ]
})
export class AboutusModule { }

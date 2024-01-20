import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';

import { AppMaterialModule } from 'src/app/shared/modules/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
})
export class CoursesModule {}

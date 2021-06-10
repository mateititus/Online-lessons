import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { StudentAddComponent } from './student/studentAdd.component';
import { StudentsComponent } from './student/student.component';
import { StudentEditComponent } from './student/studentEdit.component';
import { StudentDetailsComponent } from './student/studentDetails.component';

import { TeachersComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacherAdd.component';
import { TeacherEditComponent } from './teacher/teacherEdit.component';
import { TeacherDetailsComponent } from './teacher/teacherDetails.component';

import { LessonsComponent } from './lesson/lesson.component';
import { LessonAddComponent } from './lesson/lessonAdd.component';
import { LessonEditComponent } from './lesson/lessonEdit.component';
import { LessonDetailsComponent } from './lesson/lessonDetails.component';

import { PlansComponent } from './plan/plan.component';
import { PlanAddComponent } from './plan/planAdd.component';
import { PlanEditComponent } from './plan/planEdit.component';
import { PlanDetailsComponent } from './plan/planDetails.component';

import { OwnersComponent } from './owner/owner.component';
import { OwnerAddComponent } from './owner/ownerAdd.component';
import { OwnerEditComponent } from './owner/ownerEdit.component';
import { OwnerDetailsComponent } from './owner/ownerDetails.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,

    StudentsComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent,

    TeachersComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    TeacherDetailsComponent,

    LessonsComponent,
    LessonAddComponent,
    LessonEditComponent,
    LessonDetailsComponent,

    PlansComponent,
    PlanAddComponent,
    PlanEditComponent,
    PlanDetailsComponent,

    OwnersComponent,
    OwnerAddComponent,
    OwnerEditComponent,
    OwnerDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'students', component: StudentsComponent },
      { path: 'studentAdd', component: StudentAddComponent },
      { path: 'studentEdit/:id', component: StudentEditComponent },
      { path: 'studentDetails/:id', component: StudentDetailsComponent },

      { path: 'teachers', component: TeachersComponent },
      { path: 'teacherAdd', component: TeacherAddComponent },
      { path: 'teacherEdit/:id', component: TeacherEditComponent },
      { path: 'teacherDetails/:id', component: TeacherDetailsComponent },

      { path: 'lessons', component: LessonsComponent },
      { path: 'lessonAdd', component: LessonAddComponent },
      { path: 'lessonEdit/:id', component: LessonEditComponent },
      { path: 'lessonDetails/:id', component: LessonDetailsComponent },

      { path: 'plans', component: PlansComponent },
      { path: 'planAdd', component: PlanAddComponent },
      { path: 'planEdit/:id', component: PlanEditComponent },
      { path: 'planDetails/:id', component: PlanDetailsComponent },

      { path: 'owners', component: OwnersComponent },
      { path: 'ownerAdd', component: OwnerAddComponent },
      { path: 'ownerEdit/:id', component: OwnerEditComponent },
      { path: 'ownerDetails/:id', component: OwnerDetailsComponent },
    ], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

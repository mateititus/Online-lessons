import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student.models';
import StudentService from './student.service';

@Component({
  selector: 'app-studentAdd',
  templateUrl: './studentAdd.component.html'
})
export class StudentAddComponent {

  public student: Student = <Student>{};

  constructor(
    private studentService: StudentService,
    private router: Router) {
  }

  public saveStudent() {
    this.studentService.saveStudent(this.student).subscribe(result => {
      this.router.navigateByUrl("/students");
    }, error => console.error(error));
  }
}

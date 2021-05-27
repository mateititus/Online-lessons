import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './student.models';
import StudentService from './student.service';

@Component({
  selector: 'app-studentEdit',
  templateUrl: './studentEdit.component.html'
})
export class StudentEditComponent implements OnInit {

  public student: Student = <Student>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadStudent();
    });
  }

  constructor(private studentService: StudentService, private routers: ActivatedRoute, private router: Router) { }

  loadStudent() {
    this.studentService.loadStudentById(this.id).subscribe(result => {
      this.student = result;
    }, error => console.error(error));
  }
  public saveStudent() {
    this.studentService.updateStudent(this.student.id, this.student).subscribe(result => {
      this.router.navigateByUrl("/students");
    }, error => console.error(error));
  }
}

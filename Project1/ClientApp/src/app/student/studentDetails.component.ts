import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './student.models';
import { StudentService } from './student.service';

@Component({
  selector: 'app-studentDetails',
  templateUrl: './studentDetails.component.html'
})
export class StudentDetailsComponent implements OnInit {

  public student: Student = <Student>{};
  public id: string;

  constructor(private studentService: StudentService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.loadStudent();
    });
  }

  loadStudent() {
    this.studentService.loadStudentById(this.id).subscribe(result => {
      this.student = result;
    }, error => console.error(error));
  }
}

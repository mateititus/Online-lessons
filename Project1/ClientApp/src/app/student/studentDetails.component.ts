import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './student.models';

@Component({
  selector: 'app-studentDetails',
  templateUrl: './studentDetails.component.html'
})
export class StudentDetailsComponent {

  public student: Student = <Student>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(params => {
      this.id = params.id;
      this.loadStudents();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadStudents() {
    this.http.get<Student>(this.baseUrl + 'api/students/' + this.id).subscribe(result => {
      this.student = result;
    }, error => console.error(error));
  }
}

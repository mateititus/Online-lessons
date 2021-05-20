import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Student } from './student.models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentsComponent {
  public students: Student[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadStudents();
  }

  public deleteStudent(student: Student) {
    this.http.delete(this.baseUrl + 'api/students/' + student.id).subscribe(result => {
      this.loadStudents();
    }, error => console.error(error))
  }

  loadStudents() {
    this.http.get<Student[]>(this.baseUrl + 'api/students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
}


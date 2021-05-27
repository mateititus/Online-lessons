import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Student } from './student.models';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) { }

  loadStudents() {
    return this.http.get<Student[]>(this.baseUrl + 'api/students');
  }

  loadStudentById(id) {
    return this.http.get<Student>(this.baseUrl + 'api/students/' + id);
  }

  public saveStudent(student: Student) {
    return this.http.post(this.baseUrl + 'api/students', student);
  }

  updateStudent(id, student: Student) {
    return this.http.put(this.baseUrl + 'api/students/' + id, student);
  }

  deleteStudent(student: Student) {
    return this.http.delete(this.baseUrl + 'api/students/' + student.id);
  }
}

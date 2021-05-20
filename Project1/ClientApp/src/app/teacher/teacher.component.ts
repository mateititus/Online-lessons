import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Teacher } from './teacher.models';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeachersComponent {
  public teachers: Teacher[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadTeachers();
  }

  public deleteTeacher(teacher: Teacher) {
    this.http.delete(this.baseUrl + 'api/teachers/' + teacher.id).subscribe(result => {
      this.loadTeachers();
    }, error => console.error(error))
  }

  loadTeachers() {
    this.http.get<Teacher[]>(this.baseUrl + 'api/teachers').subscribe(result => {
      this.teachers = result;
    }, error => console.error(error));
  }
}


import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from './teacher.models';

@Component({
  selector: 'app-teacherAdd',
  templateUrl: './teacherAdd.component.html'
})
export class TeacherAddComponent {

  public teacher: Teacher = <Teacher>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveTeacher() {
    this.http.post(this.baseUrl + 'api/teachers', this.teacher).subscribe(result => {
      this.router.navigateByUrl("/teachers");
    }, error => console.error(error));
  }

}

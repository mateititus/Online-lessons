import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from './teacher.models';

@Component({
  selector: 'app-teacherDetails',
  templateUrl: './teacherDetails.component.html'
})
export class TeacherDetailsComponent {

  public teacher: Teacher = <Teacher>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(params => {
      this.id = params.id;
      this.loadTeachers();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadTeachers() {
    this.http.get<Teacher>(this.baseUrl + 'api/teachers/' + this.id).subscribe(result => {
      this.teacher = result;
    }, error => console.error(error));
  }
}

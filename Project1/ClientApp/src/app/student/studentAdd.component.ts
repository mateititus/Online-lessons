import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student.models';

@Component({
  selector: 'app-studentAdd',
  templateUrl: './studentAdd.component.html'
})
export class StudentAddComponent {

  public student: Student = <Student>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveStudent() {
    this.http.post(this.baseUrl + 'api/students', this.student).subscribe(result => {
      this.router.navigateByUrl("/students");
    }, error => console.error(error));
  }

}

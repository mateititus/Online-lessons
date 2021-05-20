import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from './lesson.models';

@Component({
  selector: 'app-lessonAdd',
  templateUrl: './lessonAdd.component.html'
})
export class LessonAddComponent {

  public lesson: Lesson = <Lesson>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
  }
  public saveLesson() {
    this.http.post(this.baseUrl + 'api/lessons', this.lesson).subscribe(result => {
      this.router.navigateByUrl("/lessons");
    }, error => console.error(error));
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from './lesson.models';

@Component({
  selector: 'app-lessonDetails',
  templateUrl: './lessonDetails.component.html'
})
export class LessonDetailsComponent {

  public lesson: Lesson = <Lesson>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(params => {
      this.id = params.id;
      this.loadLesson();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadLesson() {
    this.http.get<Lesson>(this.baseUrl + 'api/lessons/' + this.id).subscribe(result => {
      this.lesson = result;
    }, error => console.error(error));
  }
}

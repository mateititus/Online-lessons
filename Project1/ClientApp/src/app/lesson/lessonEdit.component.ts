import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from './lesson.models';

@Component({
  selector: 'app-lessonEdit',
  templateUrl: './lessonEdit.component.html'
})
export class LessonEditComponent {

  public lesson: Lesson = <Lesson>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(params => {
      this.id = params.id;
      this.loadLessons();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadLessons() {
    this.http.get<Lesson>(this.baseUrl + 'api/lessons/' + this.id).subscribe(result => {
      this.lesson = result;
    }, error => console.error(error));
  }

  public saveEditLesson() {
    this.http.put<Lesson>(this.baseUrl + 'api/lessons/' + this.id, this.lesson).subscribe(result => {
      this.router.navigateByUrl("/lessons");
    }, error => console.error(error))
  }


}

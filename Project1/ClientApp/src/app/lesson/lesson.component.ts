import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Lesson } from './lesson.models';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html'
})
export class LessonsComponent {
  public lessons: Lesson[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadLessons();
  }

  public deleteLesson(lesson: Lesson) {
    this.http.delete(this.baseUrl + 'api/lessons/' + lesson.id).subscribe(result => {
      this.loadLessons();
    }, error => console.error(error))
  }

  loadLessons() {
    this.http.get<Lesson[]>(this.baseUrl + 'api/lessons').subscribe(result => {
      this.lessons = result;
    }, error => console.error(error));
  }
}


import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Lesson } from './lesson.models';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) { }

  loadLessons() {
    return this.http.get<Lesson[]>(this.baseUrl + 'api/lessons');
  }

  loadLessonById(id) {
    return this.http.get<Lesson>(this.baseUrl + 'api/lessons/' + id);
  }

  public saveLesson(lesson: Lesson) {
    return this.http.post(this.baseUrl + 'api/lessons', lesson);
  }

  updateLesson(id, lesson: Lesson) {
    return this.http.put(this.baseUrl + 'api/lessons/' + id, lesson);
  }

  deleteLesson(lesson: Lesson) {
    return this.http.delete(this.baseUrl + 'api/lessons/' + lesson.id);
  }
}

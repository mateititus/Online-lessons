import { Component } from '@angular/core';
import { Lesson } from './lesson.models';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html'
})
export class LessonsComponent {
  public lessons: Lesson[];

  columnsToDisplay: string[] = ['name', 'time', 'price', 'actions'];

  constructor(
    private lessonService: LessonService) {
    this.loadLessons();
  }

  public deleteLesson(lesson: Lesson) {
    this.lessonService.deleteLesson(lesson).subscribe(result => {
      this.loadLessons();
    }, error => console.error(error))
  }

  public loadLessons() {
    this.lessonService.loadLessons().subscribe(
      (result) => {
        this.lessons = result;
      },
      (error) => console.error(error)
    );
  }
}

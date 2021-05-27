import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from './lesson.models';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-lessonAdd',
  templateUrl: './lessonAdd.component.html'
})
export class LessonAddComponent {

  public lesson: Lesson = <Lesson>{};

  constructor(
    private lessonService: LessonService,
    private router: Router) {
  }

  public saveLesson() {
    this.lessonService.saveLesson(this.lesson).subscribe(result => {
      this.router.navigateByUrl("/lessons");
    }, error => console.error(error));
  }
}

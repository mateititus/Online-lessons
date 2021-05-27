import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from './lesson.models';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-lessonEdit',
  templateUrl: './lessonEdit.component.html'
})
export class LessonEditComponent implements OnInit {

  public lesson: Lesson = <Lesson>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadLesson();
    });
  }

  constructor(private lessonService: LessonService, private routers: ActivatedRoute, private router: Router) { }

  loadLesson() {
    this.lessonService.loadLessonById(this.id).subscribe(result => {
      this.lesson = result;
    }, error => console.error(error));
  }
  public saveLesson() {
    this.lessonService.updateLesson(this.lesson.id, this.lesson).subscribe(result => {
      this.router.navigateByUrl("/lessons");
    }, error => console.error(error));
  }
}

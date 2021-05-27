import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from './lesson.models';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-lessonDetails',
  templateUrl: './lessonDetails.component.html'
})
export class LessonDetailsComponent implements OnInit {

  public lesson: Lesson = <Lesson>{};
  public id: string;

  constructor(private lessonService: LessonService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.loadLesson();
    });
  }

  loadLesson() {
    this.lessonService.loadLessonById(this.id).subscribe(result => {
      this.lesson = result;
    }, error => console.error(error));
  }
}

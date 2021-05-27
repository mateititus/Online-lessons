import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from './teacher.models';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacherDetails',
  templateUrl: './teacherDetails.component.html'
})
export class TeacherDetailsComponent implements OnInit {

  public teacher: Teacher = <Teacher>{};
  public id: string;

  constructor(private teacherService: TeacherService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.loadTeacher();
    });
  }

  loadTeacher() {
    this.teacherService.loadTeacherById(this.id).subscribe(result => {
      this.teacher = result;
    }, error => console.error(error));
  }
}


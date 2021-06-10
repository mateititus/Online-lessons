
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from './teacher.models';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacherEdit',
  templateUrl: './teacherEdit.component.html'
})
export class TeacherEditComponent implements OnInit {

  public teacher: Teacher = <Teacher>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadTeacher();
    });
  }

  constructor(private teacherService: TeacherService, private routers: ActivatedRoute, private router: Router) { }

  loadTeacher() {
    this.teacherService.loadTeacherById(this.id).subscribe(result => {
      this.teacher = result;
    }, error => console.error(error));
  }

  public saveTeacher() {
    this.teacherService.updateTeacher(this.teacher.id, this.teacher).subscribe(result => {
      this.router.navigateByUrl("/teachers");
    }, error => console.error(error));
  }
}

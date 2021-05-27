import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from './teacher.models';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacherAdd',
  templateUrl: './teacherAdd.component.html'
})
export class TeacherAddComponent {

  public teacher: Teacher = <Teacher>{};

  constructor(
    private teacherService: TeacherService,
    private router: Router) {
  }

  public saveTeacher() {
    this.teacherService.saveTeacher(this.teacher).subscribe(result => {
      this.router.navigateByUrl("/teachers");
    }, error => console.error(error));
  }
}

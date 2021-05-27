import { Component, Inject } from '@angular/core';
import { Teacher } from './teacher.models';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeachersComponent {
  public teachers: Teacher[];

  columnsToDisplay: string[] = ['name', 'phone', 'class', 'actions'];

  constructor(
    private teacherService: TeacherService) {
    this.loadTeachers();
  }

  public deleteTeacher(teacher: Teacher) {
    this.teacherService.deleteTeacher(teacher).subscribe(result => {
      this.loadTeachers();
    }, error => console.error(error))
  }

  public loadTeachers() {
    this.teacherService.loadTeachers().subscribe(
      (result) => {
        this.teachers = result;
      },
      (error) => console.error(error)
    );
  }
}

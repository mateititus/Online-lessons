import { Component, Inject } from '@angular/core';
import { Student } from './student.models';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentsComponent {
  public students: Student[];

  columnsToDisplay: string[] = ['name', 'age', 'phone', 'actions'];

  constructor(
    private studentService: StudentService) {
    this.loadStudents();
  }

  public deleteStudent(students: Student) {
    this.studentService.deleteStudent(students).subscribe(result => {
      this.loadStudents();
    }, error => console.error(error))
  }

  public loadStudents() {
    this.studentService.loadStudents().subscribe(
      (result) => {
        this.students = result;
      },
      (error) => console.error(error)
    );
  }
}

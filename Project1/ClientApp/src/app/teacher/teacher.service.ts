import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Teacher } from './teacher.models';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  loadTeachers() {
    return this.http.get<Teacher[]>(this.baseUrl + 'api/teachers');
  }

  loadTeacherById(id) {
    return this.http.get<Teacher>(this.baseUrl + 'api/teachers/' + id);
  }

  public saveTeacher(teacher: Teacher) {
    return this.http.post(this.baseUrl + 'api/teachers', teacher);
  }

  updateTeacher(id, teacher: Teacher) {
    return this.http.put(this.baseUrl + 'api/teachers/' + id, teacher);
  }

  deleteTeacher(teacher: Teacher) {
    return this.http.delete(this.baseUrl + 'api/teachers/' + teacher.id);
  }
}

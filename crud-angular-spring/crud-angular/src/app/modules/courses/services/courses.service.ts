import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/test/courses.json';

  constructor(private httpClient: HttpClient) {}

  listLocal(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'frontend',
      },
    ];
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }
}

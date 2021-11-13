import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/model/Courses';
import { Exercises } from 'src/model/Exercises';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = "http://localhost:7827/api/Courses";

  constructor(private httpClient: HttpClient) { }

  public GetAllCourses(): Observable<Exercises[]> {
    return this.httpClient.get<[]>(`${this.baseURL}`);
  } 

  public GetCourseById(id: number): Observable<object> { 
    return this.httpClient.get<Exercises>(`${this.baseURL}/${id}`)
  }

  public CreateCourse(exercise: Courses): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, exercise);
    
  }

}

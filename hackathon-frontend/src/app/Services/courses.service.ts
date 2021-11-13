import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/model/Courses';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = "http://localhost:7827/api/Courses";

  constructor(private httpClient: HttpClient) { }

  public GetAllCourses(): Observable<Courses[]> {
    return this.httpClient.get<Courses[]>(`${this.baseURL}`);
  } 

  public GetCourseById(id: number): Observable<object> { 
    return this.httpClient.get<Courses>(`${this.baseURL}/${id}`)
  }

  public CreateCourse(course: Courses): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, course);
    
  }

}

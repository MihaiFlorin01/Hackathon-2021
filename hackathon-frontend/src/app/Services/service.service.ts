import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Exercises } from 'src/model/Exercises';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = "http://localhost:7827/api/Exercises";

  constructor(private httpClient: HttpClient) { }

  public GetAllExercises(): Observable<Exercises[]> {
    return this.httpClient.get<[]>(`${this.baseURL}`);
  } 

  public GetExerciseById(id: number): Observable<object> { 
    return this.httpClient.get<Exercises>(`${this.baseURL}/${id}`)
  }

  public CreateExercise(exercise: Exercises): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, exercise);
    
  }
}

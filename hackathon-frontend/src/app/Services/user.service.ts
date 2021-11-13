import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = "http://localhost:7827/api/Users";

  constructor(private httpClient: HttpClient) { }

  public GetAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  } 

  public GetUserById(id: number): Observable<object> { 
    return this.httpClient.get<User>(`${this.baseURL}/${id}`)
  }

  public CreateUser(user: User): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControladorapiService {

  apiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
      return this.http.get(this.apiUrl + "/users")
    }

    getUser(id: string): Observable<any> {
      return this.http.get(this.apiUrl + "/users/" + id)
    }

    postUser(data: any): Observable<any> {
      return this.http.post(this.apiUrl + "/users", data)
    }

    updateUser(id: string, data: any): Observable<any> {
      return this.http.put(this.apiUrl + "/users/" + id, data)
    }

    deleteUser(id: string): Observable<any> {
      return this.http.delete(this.apiUrl + "/users/" + id)
    }
}

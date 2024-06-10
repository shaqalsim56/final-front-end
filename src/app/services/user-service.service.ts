import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private api_url = 'http://localhost:9815/api/v1/user/'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.api_url + 'users')
    .pipe(
      map((res)=>{
        return res;
      })
    )}
  }

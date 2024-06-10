import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {map} from 'rxjs/operators'

//
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private api_url = 'http://localhost:9815/api/v1/auth/';
  private saveToStorage(key: string, value: any){localStorage.setItem(key, value)}
  public authToken?: string;
  private tokenKey: string = 'authToken';
  currentUser?: any;
  loginState?: boolean;


  saveAuthToken(token: string): void {
    this.authToken = token;
    this.saveToStorage(this.tokenKey, token);
  }

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean{
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  //If Login is True, Fetch Token From Storage
  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null; 
  }


  login(data: any): Observable<any>{
    return this.http.post<any>( this.api_url + 'login', data).pipe(map((res)=>{
      if (res && res.data && res.data.token) {
        this.saveAuthToken(res.data.token);
        this.currentUser = res.data.user;
        localStorage.setItem('currentUser', JSON.stringify(res.data.user))
      }
        return res;
      })
    )}

    loginadmin(data: any): Observable<any>{
      return this.http.post<any>( this.api_url + 'login-admin', data).pipe(map((res)=>{
        if (res && res.data && res.data.token) {
          this.saveAuthToken(res.data.token);
          this.currentUser = res.data.user;
          localStorage.setItem('currentUser', JSON.stringify(res.data.user))
        }
          return res;
        })
      )}
  

    register(data: any): Observable<any>{
      return this.http.post<any>( this.api_url + 'register', data).pipe(map((res)=>{
          return res;
        })
      )}

      registerAdmin(data: any): Observable<any>{
        return this.http.post<any>( this.api_url + 'register-admin', data).pipe(map((res)=>{
            return res;
          })
        )}

    logout(){
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem('currentUser');
    }

    getCurrentUser(cb?: ()=> void){
      const id= this.currentUser?.id;
      this.getProfile(id).subscribe((res)=>{
        if(res['status'] === 'success'){
          this.currentUser = res.data!['user'];
          if (cb) cb();
        }
      })
    }

    getProfile(id: number): Observable<any>{
      return this.http.get<any>( `${this.api_url}profile/${id}`).pipe(map((res)=>{
        return res;
      }))
  }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.api_url + 'users').pipe(map((res)=>{
      return res;
    }))
}
      
  updateUser(data: FormData, id: number): Observable<any>{
    return this.http.patch<any>(this.api_url + `update-user/${id}`, data)
  }

  deleteUser(data: any, id: number): Observable<any>{
    return this.http.delete<any>(this.api_url + `delete-user/${id}`, data)
  }
}

  


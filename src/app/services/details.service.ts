import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private api_url = 'http://localhost:9815/api/v1/details/'
  constructor(private http: HttpClient) { }


  getBookingDetails(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-user-bookings/${id}`).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getPurchaseDetails(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-user-purchases/${id}`).pipe(
      map((res)=>{
        return res;
      })
    )
  }
}

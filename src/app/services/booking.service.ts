import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private api_url = 'http://localhost:9815/api/v1/booking/'
  constructor(private http: HttpClient) { }

  createBooking(data: FormData): Observable<any>{
    return this.http.post<any>(this.api_url + 'create-booking', data).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getSingleBooking(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-single-booking/${id}`)
  }

  getAllBookings(): Observable<any>{
    return this.http.get<any>(this.api_url + `get-bookings`)
  }

  deleteBooking(id: number, vehicleId: number): Observable<any>{
    return this.http.delete<any>(this.api_url + `delete-booking/${id}`, {
      body: { vehicle_id: vehicleId }
    });
  }

  updateBooking(data: FormData, id: number): Observable<any>{
    return this.http.patch<any>(this.api_url + `update-single-booking/${id}`, data).pipe(
      map((res)=>{
        return res;
      })
    )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private api_url = 'http://localhost:9815/api/v1/vehicles/'
  constructor(private http: HttpClient) { }

  createNewVehicleRental(data: FormData): Observable<any>{
    return this.http.post<any>(this.api_url + 'add-vehicle-rent', data).pipe(
      map((res)=>{
        return res;
      })
    )
  }


  getAllVehiclesRental(): Observable<any>{
    return this.http.get<any>(this.api_url + 'get-vehicles-rent').pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getAvailableVehiclesRental(): Observable<any>{
    return this.http.get<any>(this.api_url + 'get-available').pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getSingleVehicleRental(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-singlevehicle-rent/${id}`).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  updateVehicleRental(data: FormData, id: number): Observable<any>{
    return this.http.patch<any>(this.api_url + `update-vehicle-rent/${id}`, data).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteVehicleRental(data: any, id: number): Observable<any>{
    return this.http.delete<any>(this.api_url + `delete-vehicle-rent/${id}`, data)
  }
}


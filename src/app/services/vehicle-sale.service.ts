import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleSaleService {

  private api_url = 'http://localhost:9815/api/v1/sale/'
  constructor(private http: HttpClient) { }

  createNewVehicleSale(data: FormData): Observable<any>{
    return this.http.post<any>(this.api_url + 'add-vehicle-sale', data).pipe(
      map((res)=>{
        return res;
      })
    )
  }


  getAllVehiclesSale(): Observable<any>{
    return this.http.get<any>(this.api_url + 'get-vehicles-sale').pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getAvailableVehiclesSale(): Observable<any>{
    return this.http.get<any>(this.api_url + 'get-available').pipe(
      map((res)=>{
        return res;
      })
    )
  }


  getSingleVehicleSale(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-singlevehicle-sale/${id}`).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  updateVehicleSale(data: FormData, id: number): Observable<any>{
    return this.http.patch<any>(this.api_url + `update-vehicle-sale/${id}`, data).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteVehicleSale(data: any, id: number): Observable<any>{
    return this.http.delete<any>(this.api_url + `delete-vehicle-sale/${id}`, data)
  }
}
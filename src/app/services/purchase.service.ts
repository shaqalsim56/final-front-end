import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private api_url = 'http://localhost:9815/api/v1/purchase/'
  constructor(private http: HttpClient) { }

  makePurchase(data: FormData): Observable<any>{
    return this.http.post<any>(this.api_url + 'make-purchase', data).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  getSinglePurchase(id: number): Observable<any>{
    return this.http.get<any>(this.api_url + `get-single-purchase/${id}`)
  }

  getAllPurchases(): Observable<any>{
    return this.http.get<any>(this.api_url + `get-purchases`)
  }
}

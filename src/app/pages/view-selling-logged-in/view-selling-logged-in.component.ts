import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';

@Component({
  selector: 'app-view-selling-logged-in',
  templateUrl: './view-selling-logged-in.component.html',
  styleUrls: ['./view-selling-logged-in.component.css']
})
export class ViewSellingLoggedInComponent implements OnInit{

  ngOnInit(): void {
    this.getVehiclSale();
  }

  constructor(private route: ActivatedRoute, private vehicleService: VehicleSaleService){}

  id: number = 0;
  vehicle: any;
  hasData: boolean = false;

  getVehiclSale(){
    this.id = this.route.snapshot.params['id'];
    this.vehicleService.getSingleVehicleSale(this.id).subscribe(res=>{
      console.log(res['vehicle'])
      if(res['status'] !== 'error'){
        this.vehicle = res['vehicle'];
        this.hasData = true;
      }
    })
  }
}
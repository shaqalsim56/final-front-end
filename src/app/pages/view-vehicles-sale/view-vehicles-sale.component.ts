import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';

@Component({
  selector: 'app-view-vehicles-sale',
  templateUrl: './view-vehicles-sale.component.html',
  styleUrls: ['./view-vehicles-sale.component.css']
})
export class ViewVehiclesSaleComponent implements OnInit{

  ngOnInit(): void {
    this.getVehicleSale();
  }

  constructor(private route: ActivatedRoute, private vehicleService: VehicleSaleService){}

  id: number = 0;
  vehicle: any;
  hasData: boolean = false;

  getVehicleSale(){
    this.id = this.route.snapshot.params['id']
    this.vehicleService.getSingleVehicleSale(this.id).subscribe(res=>{
      console.log(res['vehicle'])
      if(res['status'] !== 'error'){
        this.vehicle = res['vehicle'];
        this.hasData = true;
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-view-rental-logged-out',
  templateUrl: './view-rental-logged-out.component.html',
  styleUrls: ['./view-rental-logged-out.component.css']
})
export class ViewRentalLoggedOutComponent  implements OnInit{
  ngOnInit(): void {
    this.getVehicleRent();
  }

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService){}

  id: number = 0;
  vehicle: any;
  hasData: boolean = false;

  getVehicleRent(){
    this.id = this.route.snapshot.params['id']
    this.vehicleService.getSingleVehicleRental(this.id).subscribe(res=>{
      console.log(res['vehicle'])
      if(res['status'] !== 'error'){
        this.vehicle = res['vehicle'];
        this.hasData = true;
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-view-rental-logged-in',
  templateUrl: './view-rental-logged-in.component.html',
  styleUrls: ['./view-rental-logged-in.component.css']
})
export class ViewRentalLoggedInComponent  implements OnInit{
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

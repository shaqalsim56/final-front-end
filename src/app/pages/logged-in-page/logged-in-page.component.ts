import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit{
  constructor(private vehicleService: VehicleService, private router: Router){}
  vehicles=[];
  p: number = 1;
  itemsPerPage: number = 3;
  totalVehicles: any;

   ngOnInit(): void {
    this.vehicleService.getAvailableVehiclesRental().subscribe(res =>{
      this.vehicles = res['vehicles'];
      console.log(res['vehicles']);
    })
  }


}

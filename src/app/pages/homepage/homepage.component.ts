import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit{
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

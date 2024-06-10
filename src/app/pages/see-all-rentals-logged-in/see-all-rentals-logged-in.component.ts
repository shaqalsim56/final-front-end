import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-see-all-rentals-logged-in',
  templateUrl: './see-all-rentals-logged-in.component.html',
  styleUrls: ['./see-all-rentals-logged-in.component.css']
})
export class SeeAllRentalsLoggedInComponent implements OnInit{
  constructor(private vehicleService: VehicleService, private router: Router){}
  vehicles=[];
  filteredVehicles = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalVehicles: any;
  searchtext: any;
  hasData: boolean = true;
  noResultsFound: boolean = false;


   ngOnInit(): void {
    this.vehicleService.getAvailableVehiclesRental().subscribe(res =>{
      this.vehicles = res['vehicles'];
      console.log(res['vehicles']);
      this.filteredVehicles = this.vehicles;
      this.hasData = this.vehicles.length > 0;
    })
  }

  onSearchTextChange(): void {
    this.p = 1;
    this.filteredVehicles = this.vehicles.filter(vehicle => 
      JSON.stringify(vehicle).toLowerCase().includes(this.searchtext.toLowerCase())
    );
    this.noResultsFound = this.filteredVehicles.length === 0;
  }
}
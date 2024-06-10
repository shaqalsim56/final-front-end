import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';

@Component({
  selector: 'app-see-all-selling-logged-out',
  templateUrl: './see-all-selling-logged-out.component.html',
  styleUrls: ['./see-all-selling-logged-out.component.css']
})
export class SeeAllSellingLoggedOutComponent  implements OnInit{
  constructor(private vehicleService: VehicleSaleService, private router: Router){}
  vehicles=[];
  filteredVehicles = [];
  p: number = 1;
  itemsPerPage: number = 6;
  totalVehicles: any;
  searchtext: any;
  hasData: boolean = true;
  noResultsFound: boolean = false;

  ngOnInit(): void {
    this.vehicleService.getAvailableVehiclesSale().subscribe(res =>{
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

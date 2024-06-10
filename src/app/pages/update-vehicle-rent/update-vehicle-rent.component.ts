import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-update-vehicle-rent',
  templateUrl: './update-vehicle-rent.component.html',
  styleUrls: ['./update-vehicle-rent.component.css']
})
export class UpdateVehicleRentComponent implements OnInit{

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService,
    private router: Router){ const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 2009; year--) { this.years.push(year);}}

  ngOnInit(): void {
    this.getVehicleRent();
  }

  id: number = 0;
  vehicle: any;
  hasData: boolean = false;
  years: number[] = [];

  selectedFile: File | null = null;

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
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

  updateVehicleRent(oForm: NgForm){
    const formData = new FormData();
    formData.append('vehicle_model', oForm.value.vehicle_model);
    formData.append('vehicle_make', oForm.value.vehicle_make);
    formData.append('seat_num', oForm.value.seat_num);
    formData.append('year', oForm.value.year);
    formData.append('door', oForm.value.door);
    formData.append('fuel_type', oForm.value.fuel_type);
    formData.append('price', oForm.value.price);
    formData.append('descr', oForm.value.descr);
    formData.append('status', oForm.value.status);

    formData.append('id', this.id.toString());

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
  }else{
    formData.append('img', this.vehicle.img)
  }

  this.vehicleService.updateVehicleRental(formData, this.id).subscribe((res)=>{
    if(res['status'] === 'success'){
      this.router.navigateByUrl('/manage-rental-cars');
      console.log(res['data'])
    }
  })
}


}
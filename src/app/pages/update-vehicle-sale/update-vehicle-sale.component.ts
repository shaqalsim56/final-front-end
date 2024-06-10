import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';

@Component({
  selector: 'app-update-vehicle-sale',
  templateUrl: './update-vehicle-sale.component.html',
  styleUrls: ['./update-vehicle-sale.component.css']
})
export class UpdateVehicleSaleComponent implements OnInit{



  constructor(private route: ActivatedRoute, private vehicleService: VehicleSaleService,
    private router: Router){ const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 2009; year--) { this.years.push(year);}}

  ngOnInit(): void {
      this.getVehicleSale();
   }

  id: number = 0;
  vehicle: any;
  hasData: boolean = false;
  years: number[] = [];

  selectedFile: File | null = null;

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

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

  updateVehicleSale(oForm: NgForm){
    const formData = new FormData();
    formData.append('vehicle_model', oForm.value.vehicle_model);
    formData.append('vehicle_make', oForm.value.vehicle_make);
    formData.append('seat_num', oForm.value.seat_num);
    formData.append('year', oForm.value.year);
    formData.append('door', oForm.value.door);
    formData.append('fuel_type', oForm.value.fuel_type);
    formData.append('price', oForm.value.price);
    formData.append('descr', oForm.value.descr);

    formData.append('id', this.id.toString());

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
  }else{
    formData.append('img', this.vehicle.img)
  }

  this.vehicleService.updateVehicleSale(formData, this.id).subscribe((res)=>{
    if(res['status'] === 'success'){
      this.router.navigateByUrl('/manage-sales-cars');
      console.log(res['data'])
    }
  })
}
}


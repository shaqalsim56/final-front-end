import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';

@Component({
  selector: 'app-manage-vehicles-sale',
  templateUrl: './manage-vehicles-sale.component.html',
  styleUrls: ['./manage-vehicles-sale.component.css']
})
export class ManageVehiclesSaleComponent implements OnInit{

  p: number = 1;
  itemsPerPage: number = 5;
  totalVehicles: any;
  hasData: boolean = false;

  vehicles=[];

  @ViewChild('createFormElement') createFormElement!: ElementRef;

  ngOnInit(): void {
    this.vehicleService.getAllVehiclesSale().subscribe(res =>{
      this.vehicles = res['vehicles'];
      this.totalVehicles = this.vehicles.length;
      this.hasData = this.totalVehicles > 0;
    })
  }

  showForm: boolean = false;

  toggleForm(){
    this.showForm = !this.showForm;
    if(this.showForm){
      setTimeout(() =>{
        this.scrollToForm();
      }, 0);
    }
  }

  years: number[] = [];

  selectedFile: File | null = null;

  formError: boolean = false;

  errorMessage?: string;

  constructor(private vehicleService: VehicleSaleService, private router: Router){
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) { this.years.push(year);}}



  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createSale(oForm: NgForm){
    const formData = new FormData();
    formData.append('vehicle_model', oForm.value.vehicle_model);
    formData.append('vehicle_make', oForm.value.vehicle_make);
    formData.append('seat_num', oForm.value.seat_num);
    formData.append('year', oForm.value.year);
    formData.append('door', oForm.value.door);
    formData.append('fuel_type', oForm.value.fuel_type);
    formData.append('price', oForm.value.price);
    formData.append('descr', oForm.value.descr);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.vehicleService.createNewVehicleSale(formData).subscribe({
      next:
          (res)=>{
            if(res['status'] === 'success'){
              this.formError = false;
              this.router.navigateByUrl('/manage-sales-cars').then(()=> {
                window.location.reload();
              });
        }
            console.log(res['data'])
          },
          error:
          (error)=>{
            console.log(error.error.message);
            this.formError = true;
            this.errorMessage = error.error['message'];
          }
        })
}

private scrollToForm(){
  this.createFormElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
}

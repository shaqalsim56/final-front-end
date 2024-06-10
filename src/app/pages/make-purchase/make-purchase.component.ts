import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';
import { ActivatedRoute } from '@angular/router';
import { VehicleSaleService } from 'src/app/services/vehicle-sale.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-make-purchase',
  templateUrl: './make-purchase.component.html',
  styleUrls: ['./make-purchase.component.css']
})
export class MakePurchaseComponent implements OnInit{

  ngOnInit(): void {
    this.getVehicleSale();
    this.getUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  constructor(private purchaseService: PurchaseService, 
    private vehicleService: VehicleSaleService ,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthServiceService,){}

    id: number = 0;
    vehicle: any;
    hasData: boolean = false;
    users: any = [];
    isError: boolean = false;
    errorMessage?: string;
    currentUser?: any;

    makePurchase(oForm: NgForm){
      const formData = new FormData();
      formData.append('user_id', oForm.value.user_id);
      formData.append('vehicle_id', oForm.value.vehicle_id);
      formData.append('price', oForm.value.price);

      this.purchaseService.makePurchase(formData).subscribe({
        next:
        (res)=>{
          if(res['status'] === 'success'){
            const purchaseID = res.data.id
            console.log(res['data'])
            this.router.navigateByUrl(`confirmation-page-purchase/${purchaseID}`)
          }
        }
      })
    }


    getVehicleSale(){
      this.id = this.route.snapshot.params['id'];
      this.vehicleService.getSingleVehicleSale(this.id).subscribe(res=>{
        console.log(res['vehicle'])
        if(res['status'] !== 'error'){
          this.vehicle = res['vehicle'];
          this.hasData = true;
        }
      })
    }

    getUsers(){
      this.authService.getAllUsers().subscribe({
        next:
          (res) =>{
            this.isError = false;
            if(res['status'] === 'success'){
              this.users = res.data.users;
              console.log(this.currentUser)
            }
          },
          error:
            (error)=>{
              this.isError = true;
              this.errorMessage = error.error.message;
              console.log(this.errorMessage);
              console.log(error.error);
              console.log(this.isError);
            }
      })
     }
}

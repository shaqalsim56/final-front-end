import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-book-rental',
  templateUrl: './book-rental.component.html',
  styleUrls: ['./book-rental.component.css']
})
export class BookRentalComponent implements OnInit{

  @ViewChild('startInput') startInput!: ElementRef;
  @ViewChild('endInput') endInput!: ElementRef;

  constructor(private bookingService: BookingService, 
    private vehicleService: VehicleService ,
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

  ngOnInit(): void {
    this.getVehicleRent();
    this.getUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }
  createBooking(oForm: NgForm){
    const formData = new FormData();
    const rentDate = new Date(oForm.value.rent_date);
    rentDate.setUTCHours(0, 0, 0, 0);
    const returnDate = new Date(oForm.value.return_date);
    returnDate.setUTCHours(0, 0, 0, 0);
    formData.append('user_id', oForm.value.user_id);
    formData.append('vehicle_id', oForm.value.vehicle_id);
    formData.append('rent_date', rentDate.toISOString());
    formData.append('return_date', returnDate.toISOString());
    formData.append('price', oForm.value.price);

    this.bookingService.createBooking(formData).subscribe({
      next:
        (res)=>{
          if(res['status'] === 'success'){
            const bookingID = res.data.id
            console.log(res['data'])
            this.router.navigateByUrl(`/confirmation-page/${bookingID}`);
          }
        }
    })

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

  onStartChange(event: Event): void {
    const startValue = (event.target as HTMLInputElement).value;
    if (startValue) {
      this.endInput.nativeElement.min = startValue;
    }
  }

  onEndChange(event: Event): void {
    const endValue = (event.target as HTMLInputElement).value;
    if (endValue) {
      this.startInput.nativeElement.max = endValue;
    }
  }
}


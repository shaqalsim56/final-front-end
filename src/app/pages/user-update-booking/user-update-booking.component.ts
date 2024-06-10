import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DetailsService } from 'src/app/services/details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-user-update-booking',
  templateUrl: './user-update-booking.component.html',
  styleUrls: ['./user-update-booking.component.css']
})
export class UserUpdateBookingComponent implements OnInit{

  @ViewChild('startInput') startInput!: ElementRef;
  @ViewChild('endInput') endInput!: ElementRef;

  ngOnInit(): void {
    this.getBooking();
  }

  constructor(
    private authService: AuthServiceService,
     private detailService: DetailsService,
     private bookingService: BookingService,
     private vehicleService: VehicleService,
     private router: Router,
    private route: ActivatedRoute){}

  id: number = 0;
  booking: any;
  hasData: boolean = false;
  vehicle: any;


  getBooking(){
    this.id = this.route.snapshot.params['id']
    this.bookingService.getSingleBooking(this.id).subscribe(res=>{
      console.log(res['booking'])
      if(res['status'] !== 'error'){
        this.booking = res['booking'];
        this.hasData = true;
      }
    })
  }

  updateBooking(oForm: NgForm) {
    this.id = this.route.snapshot.params['id']
    const formData = new FormData();

    const rentDate = new Date(oForm.value.rent_date);
    rentDate.setUTCHours(0, 0, 0, 0);

    const returnDate = new Date(oForm.value.return_date);
    returnDate.setUTCHours(0, 0, 0, 0);

    formData.append('rent_date', rentDate.toISOString());
    formData.append('return_date', returnDate.toISOString());

    formData.append('price', this.booking.price.toString());


    this.bookingService.updateBooking(formData, this.id).subscribe({
      next: (res) => {
        if (res['status'] === 'success') {
          console.log(res['data']);
          this.router.navigateByUrl(`/account`);
        }
      }
    });
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

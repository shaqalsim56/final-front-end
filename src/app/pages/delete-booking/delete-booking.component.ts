import { Component, OnInit, } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit{
  id: number = 0;
  booking: any;

  ngOnInit(): void {
    this.getBooking();
  }
  constructor(private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute){}

     getBooking(){
      this.id = this.route.snapshot.params['id']
      this.bookingService.getSingleBooking(this.id).subscribe(res=>{
        console.log(res['booking'])
        if(res['status'] !== 'error'){
          this.booking = res['booking'];
        }
      })
    }

    deleteBooking(){
      this.id = this.route.snapshot.params['id']
      const vehicleId = this.booking.vehicle_id;
      this.bookingService.deleteBooking(this.id, vehicleId).subscribe((res)=>{
        if(res['status'] === 'success'){
          this.router.navigateByUrl('/all-bookings')
        }
      })
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit{
  id: number = 0;
  booking: any;

  ngOnInit(): void {
    this.getBooking();
  }
  constructor(private bookingService: BookingService,
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
}

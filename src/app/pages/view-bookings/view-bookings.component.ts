import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit{

  constructor(private bookingService: BookingService, private router: Router){}

  ngOnInit(): void {
    this.getBookings();
  }


  p: number = 1;
  itemsPerPage: number = 5;
  totalBookings: any;

  bookings = [];
  isError: boolean = false;
  errorMessage?: string;

  hasData: boolean = false;

  getBookings(){
    this.bookingService.getAllBookings().subscribe({
      next:
      (res) =>{
        this.isError = false;
        if(res['status'] == 'success'){
          this.bookings = res['bookings'];
          console.log(res['bookings']);
          this.totalBookings = this.bookings.length;
          this.hasData = this.totalBookings > 0;
        }
      },
      error:
      (error)=>{
        this.isError = true;
        this.errorMessage = error.error.message;
      }
    })
  }
}

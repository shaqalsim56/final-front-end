import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit{
  booking: any;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage?: string;

  constructor(private route: ActivatedRoute, private bookingService: BookingService ) {}

  ngOnInit(): void {
    const bookingID = this.route.snapshot.params['id'];
    this.bookingService.getSingleBooking(bookingID).subscribe({
      next: (res) => {
        if (res['status'] === 'success') {
          this.booking = res['booking'];
          console.log(res['booking'])
          this.isLoading = false;
        }
      },
      error: (error) => {
        this.isError = true;
        this.errorMessage = error.error.message;
        this.isLoading = false;
      }
    });
  }
}


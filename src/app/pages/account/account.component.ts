import { Component, OnInit, } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DetailsService } from 'src/app/services/details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  p: number = 1;
  itemsPerPage: number = 5;

  totalUsers: any;
  id: number = 0;

  details: any;
  hasData: boolean = false;

  users: any = [];
  isError: boolean = false;
  
  errorMessage?: string;
  currentUser?: any;

  noBookingsFound: boolean = false;

  ngOnInit(): void {
 
    this.getUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
    this.getBookingDetails();
  }

  constructor(
    private authService: AuthServiceService,
     private detailService: DetailsService,
     private bookingService: BookingService,
     private router: Router,
    private route: ActivatedRoute){}

  getUsers(){
    this.authService.getAllUsers().subscribe({
      next:
        (res) =>{
          this.isError = false;
          if(res['status'] === 'success'){
            this.users = res.data.users;
            console.log(this.currentUser)
            console.log(this.currentUser.id)
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

   getBookingDetails(){
      this.id = this.currentUser.id;
      this.detailService.getBookingDetails(this.id).subscribe(res=>{
        console.log(res['details'])
        if(res['status'] !== 'error'){
          this.details = res['details'];
          this.hasData = true;
        }
      })
    }

    deleteBooking(detail: any){
      const bookingId = detail.id;
      const vehicleId = detail.vehicle_id;
      this.bookingService.deleteBooking(bookingId, vehicleId).subscribe((res)=>{
        if(res['status'] === 'success'){
          window.location.reload();
        }
      })
    }

}

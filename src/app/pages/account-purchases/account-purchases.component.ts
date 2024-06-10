import { Component, OnInit, } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DetailsService } from 'src/app/services/details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-purchases',
  templateUrl: './account-purchases.component.html',
  styleUrls: ['./account-purchases.component.css']
})
export class AccountPurchasesComponent implements OnInit{

  ngOnInit(): void {
 
    this.getUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
    this.getBookingDetails();
  }

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

  constructor(
    private authService: AuthServiceService, private detailService: DetailsService, private route: ActivatedRoute){}

  getBookingDetails(){
    this.id = this.currentUser.id;
    this.detailService.getPurchaseDetails(this.id).subscribe(res=>{
      console.log(res['details'])
      if(res['status'] !== 'error'){
        this.details = res['details'];
        this.hasData = true;
      }
    })
  }
}

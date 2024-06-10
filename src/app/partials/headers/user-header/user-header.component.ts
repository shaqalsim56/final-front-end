import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit{
  constructor(private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
    this.getUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  users: any = [];
  isError: boolean = false;
  errorMessage?: string;
  currentUser?: any;

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

   logout(){
    this.authService.logout();
    this.router.navigateByUrl('/')
   }
}

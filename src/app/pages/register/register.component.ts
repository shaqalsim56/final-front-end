import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private authService: AuthServiceService,
    private router: Router){}

    hasError?: boolean;
    errorMessage?: string;

    ngOnInit(): void {}

    createUser(oForm: NgForm){
      this.authService.register(oForm.value).subscribe({
        next:
        (res)=>{
        if(res['status'] == 'success'){
          this.hasError = false;
          this.router.navigateByUrl('/login');
        }
      },
      error:
      (error)=>{
        console.log(error.error.message),
        this.hasError = true;
        this.errorMessage = error.error['message']
      }
    })
    }
}

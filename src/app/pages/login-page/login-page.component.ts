import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

export class login {
  email: string;
  password: string;
  constructor(){
    this.email = '';
    this.password = '';
  }
}


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  ngOnInit(): void {}
  constructor(private authService: AuthServiceService,  private router: Router){}

 hasError?: boolean;
 errorMessage?: string;

  onLogin(oForm: NgForm){
    this.authService.login(oForm.value).subscribe({
      next: 
      (res)=>{
        if(res['status'] === 'success'){
          this.hasError = false;
           
          this.authService.authToken = res['data'] ! ['token'];
          this.authService.saveAuthToken(res.data.token);
          this.authService.getCurrentUser(()=>{
            this.authService.loginState = true;
          });
          this.router.navigateByUrl('/logged-in');
        }
      },
      error: 
      (error)=>{
        console.log(error.error.message),
        this.hasError = true;
        this.errorMessage = error.error['message']
        this.authService.loginState = false;
        this.router.navigateByUrl('/login'); 
      },
      complete: 
            ()=>{
              //Check When The Process is Finished & Do Something
            }
    })
  }
}

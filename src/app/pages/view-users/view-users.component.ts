import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit{

    p: number = 1;
    itemsPerPage: number = 5;
    totalUsers: any;

     users= [];
     isError: boolean = false;
     errorMessage?: string;
     formError: boolean = false;

     hasData: boolean = false;

     @ViewChild('userFormElement') userFormElement!: ElementRef; 

     constructor(private authService: AuthServiceService, private router: Router){}
     ngOnInit(): void {
       this.getProfiles()
     }
 
     showForm: boolean = false;

     toggleForm(){
      this.showForm = !this.showForm;
      if(this.showForm){
        setTimeout(() =>{
          this.scrollToForm();
        }, 0);
      }
    }

     getProfiles(){
      this.authService.getAllUsers().subscribe({
        next:
          (res) =>{
            this.isError = false;
            if(res['status'] == 'success'){
              this.users = res['data'];
              console.log(res['data'])
              this.totalUsers = this.users.length;
              this.hasData = this.totalUsers > 0;
            }
          },
          error:
            (error)=>{
              this.isError = true;
              this.errorMessage = error.error.message;
              console.log(this.errorMessage)
            }

      })
       

     }

     createUser(oForm: NgForm){
    const formData = new FormData();
    formData.append('first_nm', oForm.value.first_nm);
    formData.append('last_nm', oForm.value.last_nm);
    formData.append('email', oForm.value.email);
    formData.append('password', oForm.value.password);
    formData.append('last_logged_in', oForm.value.last_logged_in);
    formData.append('level', oForm.value.level);

    this.authService.registerAdmin(formData).subscribe({
      next:
          (res)=>{
            if(res['status'] === 'success'){
              this.formError = false;
              this.router.navigateByUrl('/all-users').then(()=> {
                window.location.reload();
              });
        }
            console.log(res['data'])
          },
          error:
          (error)=>{
            console.log(error.error.message);
            this.formError = true;
            this.errorMessage = error.error['message']
          }
        })
}

private scrollToForm(){
  this.userFormElement.nativeElement.scrollIntoView({behavior: 'smooth'})
}
}

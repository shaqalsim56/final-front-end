import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{

  constructor(private route: ActivatedRoute, private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
    this.getSingleUser();
  }

  id: number = 0;
  hasData: boolean = false;
  user: any;

  getSingleUser(){
    this.id = this.route.snapshot.params['id']
  this.authService.getProfile(this.id).subscribe(res =>{
    if(res['status'] !== 'error'){
      console.log(res['data'])
      this.user = res['data'];
      this.hasData = true;
    }
  })
  }

  deleteUser(oForm: NgForm){
    const formData = new FormData();
    formData.append('first_nm', oForm.value.first_nm);
    formData.append('last_nm', oForm.value.last_nm);
    formData.append('email', oForm.value.email);
    formData.append('password', oForm.value.password);
    formData.append('level', oForm.value.level);
    formData.append('status', oForm.value.status);
    formData.append('id', this.id.toString());

    this.authService.deleteUser(formData, this.id).subscribe((res)=>{
      if(res['status'] === 'success'){
        this.router.navigateByUrl('/all-users');
      }
    })
  }
}

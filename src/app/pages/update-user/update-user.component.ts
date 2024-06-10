import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{


ngOnInit(): void {
  this.getSingleUser();
}

constructor(private route: ActivatedRoute, private authService: AuthServiceService, private router: Router){}

id: number = 0;
user: any;
hasData: boolean = false;

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

updateUser(oForm: NgForm){
  const formData = new FormData();
  formData.append('first_nm', oForm.value.first_nm);
  formData.append('last_nm', oForm.value.last_nm);
  formData.append('email', oForm.value.email);
  formData.append('password', oForm.value.password);
  formData.append('level', oForm.value.level);
  formData.append('status', oForm.value.status);
  formData.append('id', this.id.toString());

  this.authService.updateUser(formData, this.id).subscribe((res)=>{
    if(res['status'] === 'success'){
      this.router.navigateByUrl('/all-users');
    }
  })
}
}

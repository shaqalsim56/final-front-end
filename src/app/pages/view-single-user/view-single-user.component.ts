import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-view-single-user',
  templateUrl: './view-single-user.component.html',
  styleUrls: ['./view-single-user.component.css']
})
export class ViewSingleUserComponent implements OnInit{

  ngOnInit(): void {
    this.getSingleUser();
  }

  constructor(private route:ActivatedRoute, private authService: AuthServiceService ){}

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
}

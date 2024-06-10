import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-view-single-purchases',
  templateUrl: './view-single-purchases.component.html',
  styleUrls: ['./view-single-purchases.component.css']
})
export class ViewSinglePurchasesComponent implements OnInit{
  id: number = 0;
  purchase: any;

  constructor(private purchaseService: PurchaseService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getPurchase();
  }

  getPurchase(){
    this.id = this.route.snapshot.params['id']
    this.purchaseService.getSinglePurchase(this.id).subscribe(res=>{
      console.log(res['purchase'])
      if(res['status'] !== 'error'){
        this.purchase = res['purchase'];
      }
    })
  }
}

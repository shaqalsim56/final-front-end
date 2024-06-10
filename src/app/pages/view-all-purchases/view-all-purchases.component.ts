import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-view-all-purchases',
  templateUrl: './view-all-purchases.component.html',
  styleUrls: ['./view-all-purchases.component.css']
})
export class ViewAllPurchasesComponent implements OnInit{
  p: number = 1;
  itemsPerPage: number = 5;
  totalPurchases: any;

  errorMessage?: string;

  hasData: boolean = false;

  purchases=[];

  constructor(private purchaseService: PurchaseService ){}

  ngOnInit(): void {
    this.purchaseService.getAllPurchases().subscribe(res =>{
        this.purchases = res['purchases'];
        this.totalPurchases = this.purchases.length;
        this.hasData = this.totalPurchases > 0;
        console.log(res['purchases'])
    })
  }

}

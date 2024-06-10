import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-sale-confirmation',
  templateUrl: './sale-confirmation.component.html',
  styleUrls: ['./sale-confirmation.component.css']
})
export class SaleConfirmationComponent implements OnInit{
  purchase: any;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage?: string;

  constructor(private route: ActivatedRoute, private purchaseService: PurchaseService ) {}

  ngOnInit(): void {
    const purchaseID = this.route.snapshot.params['id'];
    this.purchaseService.getSinglePurchase(purchaseID).subscribe({
      next: (res) => {
        if (res['status'] === 'success') {
          this.purchase = res['purchase'];
          console.log(res['purchase'])
          this.isLoading = false;
        }
      },
      error: (error) => {
        this.isError = true;
        this.errorMessage = error.error.message;
        this.isLoading = false;
      }
    });
  }
}

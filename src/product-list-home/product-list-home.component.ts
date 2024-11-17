import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-product-list-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.scss'
})
export class ProductListHomeComponent {
  @Input() products: any[] = [];
  // products: any = []
  constructor(private router: Router, private shared: SharedService) {

    const storedData = localStorage.getItem('key');
    let existingProducts: any[] = [];
    if (storedData) {
      existingProducts = JSON.parse(storedData);
      this.products = [...existingProducts]
    }
  }

  gotopage(data: any) {
    this.shared.setAnotherData(data)
    this.router.navigate(['selected-product'])

  }
}

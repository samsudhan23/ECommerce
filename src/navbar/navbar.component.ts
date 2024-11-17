import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  length: any = 0
  cart: any = [];
  constructor(private route: Router, private dataService: SharedService) {

  }


  ngOnInit() {
    this.dataService.getlength().subscribe(data => {
      this.length = data
    })
    
    this.cart = this.dataService.getAddToCart()
    this.length = this.cart.length
  }
  gotoadd() {
    this.route.navigateByUrl('add')
  }

  home() {
    this.route.navigateByUrl('product-list')
  }

  addTocart() {
    this.route.navigateByUrl('addtocart')
  }

  logOut(){
    this.route.navigateByUrl('')
  }

}

import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  right;
  left;
  rightCylinder;
  leftCylinder;


  constructor(private shopService: ShopService) {
    
   }

  ngOnInit(): void {
  }
  add(){
    this.shopService.right = this.right
    this.shopService.left = this.left
    this.shopService.rightCylinder = this.rightCylinder
    this.shopService.leftCylinder = this.leftCylinder

  }

}

import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  frame:any;
  lens;
  right;
  left;
  rightCylinder;
  leftCylinder;


  constructor(private shopService: ShopService) {
   
   }

  ngOnInit(): void {
    this.frame = this.shopService.frame
    this.lens = this.shopService.lens
    this.right = this.shopService.right
    this.left = this.shopService.left
    this.rightCylinder = this.shopService.rightCylinder
    this.leftCylinder = this.shopService.leftCylinder;
  }

}

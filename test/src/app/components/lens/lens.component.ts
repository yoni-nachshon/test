import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent implements OnInit {
  @Input() lens;

  constructor(private shopService: ShopService) {
   
   }

  ngOnInit(): void {
  }
  add(){
    this.shopService.lens = this.lens;

  }

}

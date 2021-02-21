import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() frame;

  constructor(private shopService: ShopService  ) {
    
   }

  ngOnInit(): void {
  }
  add(){
    this.shopService.frame = this.frame;

  }

}

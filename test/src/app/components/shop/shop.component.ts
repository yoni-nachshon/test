import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  glasses = [
    {image:'/assets/images.jpg',
    desc: 'חצי מסגרת שחורה' },
    {image:'/assets/images.jpg',
    desc: 'חצי מסגרת שחורה' },
    {image:'/assets/images.jpg',
    desc: 'חצי מסגרת שחורה' },
    {image:'/assets/images.jpg',
    desc: 'חצי מסגרת שחורה' },
    {image:'/assets/images.jpg',
    desc: 'חצי מסגרת שחורה' }
     
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }
  add(glass){
    this.shopService.arr.push(glass);
  }

}

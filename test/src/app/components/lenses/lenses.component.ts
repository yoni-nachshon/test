import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.css']
})
export class LensesComponent implements OnInit {
  lenses = ['close','far','multifocal'];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
  frames = ['black','blue','green','red','gray'];

  constructor() { }

  ngOnInit(): void {
  }

}

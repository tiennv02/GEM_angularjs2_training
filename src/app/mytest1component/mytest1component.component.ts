import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mytest1component',
  templateUrl: './mytest1component.component.html',
  styleUrls: ['./mytest1component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class Mytest1componentComponent implements OnInit {
  avatar: string;
  message: string;
  doclick() {
    this.message = 'This is my avatar';
  }
  constructor() { }

  ngOnInit() {
    this.avatar = 'assets/14484986_748572701950098_7376815884708209819_n.jpg';
  }
}

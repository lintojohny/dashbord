import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor() { }

  ngOnInit() {
  }

}

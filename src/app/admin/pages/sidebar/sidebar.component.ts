import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'dash-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

$("ul").tree({});
  }

}

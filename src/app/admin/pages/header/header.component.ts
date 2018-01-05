import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  sideBarHidden: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(event){
    event.preventDefault();
    let width = window.innerWidth;
    console.log(width);
    if(this.sideBarHidden){
      this.body.classList.remove('sidebar-collapse');
      if (width<768) {
      this.body.classList.add('sidebar-open');
      }
    }else{
      this.body.classList.add('sidebar-collapse');
      if (width<768) {
        this.body.classList.remove('sidebar-open');
        }
    }
    this.sideBarHidden = !this.sideBarHidden;
  }


}

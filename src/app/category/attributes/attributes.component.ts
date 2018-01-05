import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
  imageDenied = '../../../assets/images/imageDenied.png';

  constructor() { }

  ngOnInit() {
  }

}

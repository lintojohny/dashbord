import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'dash-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent  {
  displayedColumns = ['position', 'name', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}

export interface Element {
  name: string;
  position: number;
  action: string;

}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', action: '[edit] [uninstal]' },
  {position: 2, name: 'Helium', action: '[edit] [uninstal]' },
  {position: 3, name: 'Lithium', action: '[edit] [uninstal]' },
  {position: 4, name: 'Beryllium', action: '[edit] [uninstal]' },
  {position: 5, name: 'Boron', action: '[edit] [uninstal]' },
  {position: 6, name: 'Carbon', action: '[edit] [uninstal]' },
  {position: 7, name: 'Nitrogen', action: '[edit] [uninstal]' },
  {position: 8, name: 'Oxygen', action: '[edit] [uninstal]' },
  {position: 9, name: 'Fluorine', action: '[edit] [uninstal]' },
  {position: 10, name: 'Neon', action: '[edit] [uninstal]' },
  {position: 11, name: 'Sodium', action: '[edit] [uninstal]' },
  {position: 12, name: 'Magnesium', action: '[edit] [uninstal]' },
  {position: 13, name: 'Aluminum', action: '[edit] [uninstal]' },
  {position: 14, name: 'Silicon', action: '[edit] [uninstal]' },
  {position: 15, name: 'Phosphorus', action: '[edit] [uninstal]' },
  {position: 16, name: 'Sulfur', action: '[edit] [uninstal]' },
  {position: 17, name: 'Chlorine', action: '[edit] [uninstal]' },
  {position: 18, name: 'Argon', action: '[edit] [uninstal]' },
  {position: 19, name: 'Potassium', action: '[edit] [uninstal]' },
  {position: 20, name: 'Calcium', action: '[edit] [uninstal]' },
];

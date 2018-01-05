import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'dash-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent {
  displayedColumns = ['position', 'name', 'coustomer', 'status', 'date', 'total', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  name: string;
  position: any;
  coustomer: any;
  status: string;
  date: any;
  total: any;
  action: any;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 2, name: 'Helium', coustomer: '--', status: 'Not Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 3, name: 'Lithium', coustomer: '--', status: 'Not Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 4, name: 'Beryllium', coustomer: '--', status: 'Not Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 5, name: 'Boron', coustomer: '--', status: 'Not Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 6, name: 'Carbon', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 7, name: 'Nitrogen', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 8, name: 'Oxygen', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 9, name: 'Fluorine', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
  {position: 10, name: 'Neon', coustomer: '--', status: 'Deliverd', date: '10-12-17', total: 58, action: '[edit][delete]'},
];

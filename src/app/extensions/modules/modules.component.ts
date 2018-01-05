import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'dash-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent  {

  displayedColumns = ['position', 'name', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  name: string;
  position: number;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', action: '[edit] [uninstall]'},
  {position: 2, name: 'Helium', action: '[edit] [uninstall]'},
  {position: 3, name: 'Lithium', action: '[edit] [uninstall]'},
  {position: 4, name: 'Beryllium', action: '[edit] [uninstall]'},
  {position: 5, name: 'Boron', action: '[edit] [uninstall]'} ,
  {position: 6, name: 'Carbon', action: '[edit] [uninstall]'} ,
  {position: 7, name: 'Nitrogen', action: '[edit] [uninstall]'} ,
  {position: 8, name: 'Oxygen', action: '[edit] [uninstall]'} ,
  {position: 9, name: 'Fluorine', action: '[edit] [uninstall]'} ,
  {position: 10, name: 'Neon', action: '[edit] [uninstall]'},
  {position: 11, name: 'Sodium', action: '[edit] [uninstall]'},
  {position: 12, name: 'Magnesium', action: '[edit] [uninstall]'},
  {position: 13, name: 'Aluminum', action: '[edit] [uninstall]'},
  {position: 14, name: 'Silicon', action: '[edit] [uninstall]'},
  {position: 15, name: 'Phosphorus', action: '[edit] [uninstall]'} ,
  {position: 16, name: 'Sulfur', action: '[edit] [uninstall]'} ,
  {position: 17, name: 'Chlorine', action: '[edit] [uninstall]'},
  {position: 18, name: 'Argon', action: '[edit] [uninstall]'},
  {position: 19, name: 'Potassium', action: '[edit] [uninstall]'} ,
  {position: 20, name: 'Calcium', action: '[edit] [uninstall]'},
];


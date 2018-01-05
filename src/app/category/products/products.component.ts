import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'dash-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'status', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


}
export interface Element {
  name: string;
  position: any;
  weight: number;
  symbol: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {position: '../../../assets/images/avathar.png' , name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Helium', weight: 4.0026, symbol: 'He', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Boron', weight: 10.811, symbol: 'B', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Carbon', weight: 12.0107, symbol: 'C', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Nitrogen', weight: 14.0067, symbol: 'N', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' ,  name: 'Oxygen', weight: 15.9994, symbol: 'O', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Fluorine', weight: 18.9984, symbol: 'F', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Neon', weight: 20.1797, symbol: 'Ne', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Sodium', weight: 22.9897, symbol: 'Na', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Magnesium', weight: 24.305, symbol: 'Mg', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Aluminum', weight: 26.9815, symbol: 'Al', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Silicon', weight: 28.0855, symbol: 'Si', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Phosphorus', weight: 30.9738, symbol: 'P', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Sulfur', weight: 32.065, symbol: 'S', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Chlorine', weight: 35.453, symbol: 'Cl', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Argon', weight: 39.948, symbol: 'Ar', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Potassium', weight: 39.0983, symbol: 'K', status: 'enabled', action: '[edit]'},
  {position: '../../../assets/images/avathar.png' , name: 'Calcium', weight: 40.078, symbol: 'Ca', status: 'enabled', action: '[edit]'},
];

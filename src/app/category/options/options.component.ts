import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'dash-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent  {

  displayedColumns = ['select', 'name', 'for', 'order', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Element {
  name: string;
  for: any;
  order: number;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'burger', for: 'Hydrogen', order: 12, action: '[edit]'},
  {name: 'soft drink', for: 'Helium', order: 122, action: '[edit]'},
  {name: 'coke', for: 'Lithium', order: 222, action: '[edit]'},
  {name: 'pepsi', for: 'Beryllium', order: 342, action: '[edit]'},
  {name: 'lime', for: 'Boron', order: 243, action: '[edit]'},
  {name: 'shake', for: 'Carbon', order:  342, action: '[edit]'},
  {name: 'burger', for: 'Nitrogen', order:  542, action: '[edit]'},
  {name: 'burger', for: 'Oxygen', order:  42, action: '[edit]'},
  {name: 'burger', for: 'Fluorine', order:  52, action: '[edit]'},
  {name: 'Bread', for: 'Neon', order:  52, action: '[edit]'},
  {name: 'Bread', for: 'Sodium', order:  52, action: '[edit]'},
  {name: 'Bread', for: 'Magnesium', order: 24, action: '[edit]'},
  {name: 'Bread', for: 'Aluminum', order:  25, action: '[edit]'},
  {name: 'Bread', for: 'Silicon', order:  53, action: '[edit]'},
  {name: 'Bread', for: 'Phosphorus', order:  2, action: '[edit]'},
  {name: 'Bread', for: 'Sulfur', order: 32, action: '[edit]'},
  {name: 'Bread', for: 'Chlorine', order: 82, action: '[edit]'},
  {name: 'Bread', for: 'Argon', order: 27, action: '[edit]'},
  {name: 'Bread', for: 'Potassium', order:  62, action: '[edit]'},
  {name: 'Bread', for: 'Calcium', order: 29, action: '[edit]'},
];

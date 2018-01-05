import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'dash-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: ' ', symbol: 'H'},
  {position: 2, name: 'Helium', weight: ' ', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: ' ', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: ' ', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: ' ', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: ' ', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: ' ', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: ' ', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: ' ', symbol: 'F'},
  {position: 10, name: 'Neon', weight: ' ', symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: ' ', symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: ' ', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: ' ', symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: ' ', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: ' ', symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: ' ', symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: ' ', symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: ' ', symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: ' ', symbol: 'K'},
  {position: 20, name: 'Calcium', weight: ' ', symbol: 'Ca'},
];

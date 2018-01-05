import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'dash-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent  {
  selectedValue: string;

  dates = [
    {value: 'Today', viewValue: 'today'},
    {value: 'This Week', viewValue: 'this week'},
    {value: 'This Month', viewValue: 'this month'},
    {value: 'THis Year', viewValue: 'this year'}

  ];


  displayedColumns = ['total',  'amount'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  total: string;
  amount: string;
}

const ELEMENT_DATA: Element[] = [
  {total: 'Total Sales:	', amount: '4153'},
  {total: 'Total Sales This Year:	', amount: '24151'},
  {total: 'No. of Customers:		', amount: '785'},
  {total: 'Customers Awaiting Approval:	', amount: '0'},
  {total: 'Affiliates Awaiting Approval:		', amount: '5'}
];


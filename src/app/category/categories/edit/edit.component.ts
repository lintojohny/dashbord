import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dash-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

    animals = [
      {name: 'Pizza', sound: 'you were selected Pizza' },
      {name: 'Burger', sound: 'you were selected Burger!'},
      {name: 'Rice', sound: 'you were selected Rice!'},
      {name: 'Sandwitch', sound: 'you were selected Sandwitch'},
    ];

    deliveryMethod: string;

  methods = [
    'Carry',
    'Collect From Store',
    'Home Delivery',
    'Next Day Delivery',
  ];

  constructor() { }

  ngOnInit() {
  }

}

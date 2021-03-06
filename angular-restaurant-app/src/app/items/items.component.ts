import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item [] = [{
    name: 'Pizza',
    price: 3
  },
  {
    name: 'Salad',
    price: 2
  },
  {
    name: 'Dough',
    price: 1
  },
  {
    name: 'Soda',
    price: 2.50
  }];
  itemSubmitted = false;
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  addToCart() {
    window.alert('Added');
  }

  ngOnInit() {
    // Initiating the form with the fields and the required validators
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required], // Name is required
      price: ['', [Validators.required, Validators.min(0)]] // Price is required and must be a positive number
    });
  }

  get getItemForm() {
    return this.itemForm.controls;
  }

  addNewItem() {
    this.itemSubmitted = true;
    if (this.itemForm.invalid) {
      console.log(this.itemForm);
    } else {
      this.items.push(this.itemForm.value);
    }
  }
}

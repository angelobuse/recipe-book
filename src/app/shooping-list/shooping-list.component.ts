import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient ('Pepper', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddedIngredient(items: Ingredient) {
    this.ingredients.push(items);
  }

}

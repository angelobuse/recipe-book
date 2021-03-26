import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe | undefined;

  @Output() recipeDetails = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails() {
    this.recipeDetails.emit();
  }
}

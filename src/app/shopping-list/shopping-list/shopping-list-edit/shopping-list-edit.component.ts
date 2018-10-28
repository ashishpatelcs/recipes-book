import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameRef') nameRef: ElementRef;
  @ViewChild('amountRef') amountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter <Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameRef') nameRef: ElementRef;
  @ViewChild('amountRef') amountRef: ElementRef;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.shoppinglistService.addIngredient(ingredient);
  }

}

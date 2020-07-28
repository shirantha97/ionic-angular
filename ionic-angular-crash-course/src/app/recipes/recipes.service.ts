import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit {

  ngOnInit(){}

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients : ['French Fries', 'Pork']
    },
    {
      id: 'r2',
      title: 'Pork Curry',
      imageUrl: 'https://i1.wp.com/pachakam.com/wp-content/uploads/2009/04/CoorgStylePork.jpg?fit=1024%2C768&ssl=1',
      ingredients : ['Pork', 'Tomato']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeID: string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeID
      })
    };
  }
  
}

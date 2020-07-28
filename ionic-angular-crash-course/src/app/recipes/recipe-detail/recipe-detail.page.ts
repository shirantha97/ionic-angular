import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activeRouteParam: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activeRouteParam.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId)
    }) 
  }

}

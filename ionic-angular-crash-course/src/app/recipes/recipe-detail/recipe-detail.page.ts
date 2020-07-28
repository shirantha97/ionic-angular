import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor(private activeRouteParam: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouteParam.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
    }) 
  }

}

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.
    put('https://section19-e6779.firebaseio.com/recipes.json',
      recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.get(
      'https://section19-e6779.firebaseio.com/recipes.json')
      .subscribe(recipes =)
  }
}

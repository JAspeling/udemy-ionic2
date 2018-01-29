import { Ingredient } from './Ingredient';
export class Recipe {
  public title: string;
  public description: string;
  public difficulty: string;
  public ingredients: Ingredient[];

  constructor(init? : Partial<Recipe>) {
    Object.assign(this, init);
  }
}

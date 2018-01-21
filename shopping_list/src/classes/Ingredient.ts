
export class Ingredient {

  constructor(init? : Partial<Ingredient>) {
    Object.assign(this, init);
  }
  
  name: string;
  amount: number = 0;
}
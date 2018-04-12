export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public cost: number;

  constructor(name: string, desc: string, imagePath: string, cost: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.cost = cost;
  }
}

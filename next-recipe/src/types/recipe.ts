export interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  cookTimeMinutes: number;

}

export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}


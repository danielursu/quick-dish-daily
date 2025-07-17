export interface Recipe {
  id: string;
  name: string;
  heroImage: string;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: Ingredient[];
  steps: string[];
  tags: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  cuisine: string;
  calories?: number;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  category?: 'protein' | 'vegetarian' | 'vegan' | 'carbs' | 'dairy' | 'spice' | 'other';
}

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  checked: boolean;
  category: string;
  sourceRecipeIds: string[];
}

export interface ShoppingList {
  id: string;
  userId?: string;
  items: ShoppingListItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DailyPicks {
  date: string;
  recipes: Recipe[];
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  dislikedIngredients: string[];
  preferredCuisines: string[];
  maxCookTime: number;
}
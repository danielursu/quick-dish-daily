import { ShoppingList, ShoppingListItem, Recipe, Ingredient } from './types';

export const getShoppingList = (): ShoppingList => {
  const stored = localStorage.getItem('shoppingList');
  if (stored) {
    const parsed = JSON.parse(stored);
    return {
      ...parsed,
      createdAt: new Date(parsed.createdAt),
      updatedAt: new Date(parsed.updatedAt)
    };
  }
  
  return {
    id: generateId(),
    items: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

export const saveShoppingList = (list: ShoppingList): void => {
  localStorage.setItem('shoppingList', JSON.stringify(list));
};

export const addRecipeToShoppingList = (recipe: Recipe): void => {
  const list = getShoppingList();
  
  recipe.ingredients.forEach(ingredient => {
    const existingItem = list.items.find(item => 
      item.name.toLowerCase() === ingredient.name.toLowerCase()
    );
    
    if (existingItem) {
      // Combine quantities if same unit, otherwise create separate entries
      if (existingItem.unit === ingredient.unit) {
        existingItem.quantity += ingredient.quantity;
        if (!existingItem.sourceRecipeIds.includes(recipe.id)) {
          existingItem.sourceRecipeIds.push(recipe.id);
        }
      } else {
        // Different unit, create new item
        list.items.push(createShoppingListItem(ingredient, recipe.id));
      }
    } else {
      list.items.push(createShoppingListItem(ingredient, recipe.id));
    }
  });
  
  list.updatedAt = new Date();
  saveShoppingList(list);
};

export const removeRecipeFromShoppingList = (recipeId: string): void => {
  const list = getShoppingList();
  
  list.items = list.items.filter(item => {
    // Remove recipe ID from source list
    item.sourceRecipeIds = item.sourceRecipeIds.filter(id => id !== recipeId);
    // Keep item only if it's still referenced by other recipes
    return item.sourceRecipeIds.length > 0;
  });
  
  list.updatedAt = new Date();
  saveShoppingList(list);
};

export const toggleShoppingListItem = (itemId: string): void => {
  const list = getShoppingList();
  const item = list.items.find(item => item.id === itemId);
  
  if (item) {
    item.checked = !item.checked;
    list.updatedAt = new Date();
    saveShoppingList(list);
  }
};

export const removeShoppingListItem = (itemId: string): void => {
  const list = getShoppingList();
  list.items = list.items.filter(item => item.id !== itemId);
  list.updatedAt = new Date();
  saveShoppingList(list);
};

export const clearShoppingList = (): void => {
  const list: ShoppingList = {
    id: generateId(),
    items: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  saveShoppingList(list);
};

export const getShoppingListByCategory = (): Record<string, ShoppingListItem[]> => {
  const list = getShoppingList();
  const categories: Record<string, ShoppingListItem[]> = {};
  
  list.items.forEach(item => {
    const category = item.category || 'Other';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(item);
  });
  
  return categories;
};

const createShoppingListItem = (ingredient: Ingredient, recipeId: string): ShoppingListItem => ({
  id: generateId(),
  name: ingredient.name,
  quantity: ingredient.quantity,
  unit: ingredient.unit,
  checked: false,
  category: ingredient.category || 'other',
  sourceRecipeIds: [recipeId]
});

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

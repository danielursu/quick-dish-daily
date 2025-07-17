import { Recipe, DailyPicks } from './types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    prepMinutes: 15,
    cookMinutes: 20,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Mediterranean',
    calories: 420,
    tags: ['healthy', 'vegetarian', 'gluten-free', 'quick'],
    ingredients: [
      { name: 'Quinoa', quantity: 1, unit: 'cup', category: 'carbs' },
      { name: 'Cherry tomatoes', quantity: 200, unit: 'g', category: 'vegetarian' },
      { name: 'Cucumber', quantity: 1, unit: 'large', category: 'vegetarian' },
      { name: 'Red onion', quantity: 0.5, unit: 'medium', category: 'vegetarian' },
      { name: 'Feta cheese', quantity: 100, unit: 'g', category: 'dairy' },
      { name: 'Kalamata olives', quantity: 50, unit: 'g', category: 'other' },
      { name: 'Olive oil', quantity: 3, unit: 'tbsp', category: 'other' },
      { name: 'Lemon juice', quantity: 2, unit: 'tbsp', category: 'other' },
      { name: 'Fresh herbs', quantity: 0.25, unit: 'cup', category: 'spice' }
    ],
    steps: [
      'Rinse quinoa and cook according to package directions with vegetable broth.',
      'While quinoa cooks, dice tomatoes, cucumber, and red onion.',
      'Whisk together olive oil, lemon juice, salt, and pepper for dressing.',
      'Fluff cooked quinoa with a fork and let cool slightly.',
      'Combine quinoa with vegetables, feta, and olives.',
      'Drizzle with dressing and toss gently.',
      'Garnish with fresh herbs and serve immediately.'
    ]
  },
  {
    id: '2',
    name: 'Honey Garlic Salmon',
    heroImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    prepMinutes: 10,
    cookMinutes: 15,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Asian',
    calories: 380,
    tags: ['protein', 'healthy', 'quick', 'gluten-free'],
    ingredients: [
      { name: 'Salmon fillets', quantity: 4, unit: 'pieces', category: 'protein' },
      { name: 'Honey', quantity: 3, unit: 'tbsp', category: 'other' },
      { name: 'Soy sauce', quantity: 2, unit: 'tbsp', category: 'other' },
      { name: 'Garlic', quantity: 3, unit: 'cloves', category: 'spice' },
      { name: 'Fresh ginger', quantity: 1, unit: 'tsp', category: 'spice' },
      { name: 'Rice vinegar', quantity: 1, unit: 'tbsp', category: 'other' },
      { name: 'Sesame oil', quantity: 1, unit: 'tsp', category: 'other' },
      { name: 'Green onions', quantity: 2, unit: 'stalks', category: 'vegetarian' }
    ],
    steps: [
      'Preheat oven to 400°F (200°C).',
      'Mix honey, soy sauce, minced garlic, ginger, rice vinegar, and sesame oil.',
      'Place salmon fillets in a baking dish and pour half the sauce over them.',
      'Bake for 12-15 minutes until fish flakes easily.',
      'Heat remaining sauce in a small pan until thickened.',
      'Serve salmon topped with sauce and sliced green onions.'
    ]
  },
  {
    id: '3',
    name: 'Classic Caesar Salad',
    heroImage: 'https://images.unsplash.com/photo-1512852939750-1305098529bf',
    prepMinutes: 20,
    cookMinutes: 5,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Italian',
    calories: 320,
    tags: ['vegetarian', 'quick', 'salad'],
    ingredients: [
      { name: 'Romaine lettuce', quantity: 2, unit: 'heads', category: 'vegetarian' },
      { name: 'Parmesan cheese', quantity: 100, unit: 'g', category: 'dairy' },
      { name: 'Bread', quantity: 4, unit: 'slices', category: 'carbs' },
      { name: 'Mayonnaise', quantity: 0.5, unit: 'cup', category: 'other' },
      { name: 'Lemon juice', quantity: 2, unit: 'tbsp', category: 'other' },
      { name: 'Garlic', quantity: 2, unit: 'cloves', category: 'spice' },
      { name: 'Worcestershire sauce', quantity: 1, unit: 'tsp', category: 'other' },
      { name: 'Anchovy paste', quantity: 1, unit: 'tsp', category: 'protein' }
    ],
    steps: [
      'Cut bread into cubes and toast until golden for croutons.',
      'Wash and chop romaine lettuce into bite-sized pieces.',
      'Whisk together mayonnaise, lemon juice, minced garlic, Worcestershire, and anchovy paste.',
      'Toss lettuce with dressing until well coated.',
      'Add croutons and grated Parmesan cheese.',
      'Serve immediately with extra Parmesan on top.'
    ]
  },
  {
    id: '4',
    name: 'Mushroom Risotto',
    heroImage: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    prepMinutes: 10,
    cookMinutes: 30,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Italian',
    calories: 450,
    tags: ['vegetarian', 'comfort', 'creamy'],
    ingredients: [
      { name: 'Arborio rice', quantity: 1.5, unit: 'cups', category: 'carbs' },
      { name: 'Mixed mushrooms', quantity: 300, unit: 'g', category: 'vegetarian' },
      { name: 'Vegetable stock', quantity: 4, unit: 'cups', category: 'other' },
      { name: 'White wine', quantity: 0.5, unit: 'cup', category: 'other' },
      { name: 'Onion', quantity: 1, unit: 'medium', category: 'vegetarian' },
      { name: 'Garlic', quantity: 3, unit: 'cloves', category: 'spice' },
      { name: 'Parmesan cheese', quantity: 100, unit: 'g', category: 'dairy' },
      { name: 'Butter', quantity: 2, unit: 'tbsp', category: 'dairy' },
      { name: 'Fresh thyme', quantity: 1, unit: 'tbsp', category: 'spice' }
    ],
    steps: [
      'Heat stock in a saucepan and keep warm.',
      'Sauté sliced mushrooms until golden, set aside.',
      'In the same pan, cook diced onion and garlic until soft.',
      'Add rice and stir for 1 minute until coated.',
      'Add wine and stir until absorbed.',
      'Add warm stock one ladle at a time, stirring constantly.',
      'Continue until rice is creamy and tender, about 20 minutes.',
      'Stir in mushrooms, Parmesan, butter, and thyme.',
      'Season and serve immediately.'
    ]
  },
  {
    id: '5',
    name: 'Thai Green Curry',
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    prepMinutes: 15,
    cookMinutes: 25,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Thai',
    calories: 380,
    tags: ['spicy', 'coconut', 'gluten-free'],
    ingredients: [
      { name: 'Chicken breast', quantity: 500, unit: 'g', category: 'protein' },
      { name: 'Coconut milk', quantity: 400, unit: 'ml', category: 'other' },
      { name: 'Green curry paste', quantity: 2, unit: 'tbsp', category: 'spice' },
      { name: 'Thai basil', quantity: 0.5, unit: 'cup', category: 'spice' },
      { name: 'Eggplant', quantity: 200, unit: 'g', category: 'vegetarian' },
      { name: 'Bell peppers', quantity: 2, unit: 'medium', category: 'vegetarian' },
      { name: 'Fish sauce', quantity: 2, unit: 'tbsp', category: 'other' },
      { name: 'Palm sugar', quantity: 1, unit: 'tbsp', category: 'other' },
      { name: 'Lime juice', quantity: 1, unit: 'tbsp', category: 'other' }
    ],
    steps: [
      'Cut chicken into bite-sized pieces.',
      'Heat thick coconut milk in a wok until oil separates.',
      'Add curry paste and fry until fragrant.',
      'Add chicken and cook until nearly done.',
      'Add remaining coconut milk, fish sauce, and palm sugar.',
      'Add vegetables and simmer until tender.',
      'Stir in Thai basil and lime juice.',
      'Serve hot with jasmine rice.'
    ]
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    heroImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    prepMinutes: 15,
    cookMinutes: 12,
    difficulty: 'Hard',
    servings: 4,
    cuisine: 'French',
    calories: 520,
    tags: ['dessert', 'chocolate', 'indulgent'],
    ingredients: [
      { name: 'Dark chocolate', quantity: 200, unit: 'g', category: 'other' },
      { name: 'Butter', quantity: 100, unit: 'g', category: 'dairy' },
      { name: 'Eggs', quantity: 2, unit: 'large', category: 'protein' },
      { name: 'Egg yolks', quantity: 2, unit: 'extra', category: 'protein' },
      { name: 'Caster sugar', quantity: 60, unit: 'g', category: 'other' },
      { name: 'Plain flour', quantity: 2, unit: 'tbsp', category: 'carbs' },
      { name: 'Vanilla extract', quantity: 1, unit: 'tsp', category: 'spice' },
      { name: 'Cocoa powder', quantity: 1, unit: 'tbsp', category: 'other' }
    ],
    steps: [
      'Preheat oven to 200°C. Grease 4 ramekins with butter and dust with cocoa.',
      'Melt chocolate and butter in a double boiler until smooth.',
      'Whisk whole eggs, egg yolks, and sugar until thick and pale.',
      'Fold melted chocolate mixture into egg mixture.',
      'Sift in flour and fold gently until just combined.',
      'Divide mixture between prepared ramekins.',
      'Bake for 10-12 minutes until edges are firm but centers still wobble.',
      'Let rest for 1 minute, then turn out onto plates.',
      'Serve immediately with vanilla ice cream.'
    ]
  }
];

export const getTodaysPicks = (): DailyPicks => {
  const today = new Date().toISOString().split('T')[0];
  
  // Simulate daily algorithm - in real app this would come from backend
  const shuffled = [...sampleRecipes].sort(() => Math.random() - 0.5);
  const picks = shuffled.slice(0, 3);
  
  return {
    date: today,
    recipes: picks
  };
};

export const getFavoriteRecipes = (): Recipe[] => {
  const favoriteIds = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
  return sampleRecipes.filter(recipe => favoriteIds.includes(recipe.id));
};

export const toggleFavorite = (recipeId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
  const index = favorites.indexOf(recipeId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(recipeId);
  }
  
  localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  return index === -1; // Return true if added, false if removed
};

export const isFavorite = (recipeId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
  return favorites.includes(recipeId);
};
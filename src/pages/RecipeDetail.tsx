import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Heart, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sampleRecipes, toggleFavorite, isFavorite } from '@/lib/data';
import { addRecipeToShoppingList } from '@/lib/shopping-list';
import { useState } from 'react';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = sampleRecipes.find(r => r.id === id);
  const [favorite, setFavorite] = useState(recipe ? isFavorite(recipe.id) : false);
  
  if (!recipe) {
    return <div className="text-center py-8">Recipe not found</div>;
  }
  
  const handleFavorite = () => {
    const newState = toggleFavorite(recipe.id);
    setFavorite(newState);
  };
  
  const handleAddToShopping = () => {
    addRecipeToShoppingList(recipe);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            Back
          </Button>
        </Link>
        
        <Button 
          onClick={handleFavorite}
          variant={favorite ? "default" : "outline"}
          size="sm"
          className="gap-2"
        >
          <Heart size={16} className={favorite ? 'fill-current' : ''} />
          {favorite ? 'Saved' : 'Save'}
        </Button>
      </div>
      
      <img 
        src={recipe.heroImage} 
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      
      <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          {recipe.prepMinutes + recipe.cookMinutes}min
        </div>
        <div className="flex items-center gap-1">
          <Users size={16} />
          {recipe.servings} servings
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <div className="space-y-2">
            {recipe.ingredients.map((ingredient, i) => (
              <div key={i} className="flex justify-between p-3 bg-card rounded-lg">
                <span>{ingredient.name}</span>
                <span className="text-muted-foreground">
                  {ingredient.quantity} {ingredient.unit}
                </span>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={handleAddToShopping}
            variant="outline" 
            className="w-full mt-4 gap-2"
          >
            <Plus size={16} />
            Add to Shopping List
          </Button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <div className="space-y-3">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
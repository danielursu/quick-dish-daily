import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import RecipeCard from '@/components/RecipeCard';
import { getFavoriteRecipes } from '@/lib/data';
import { Recipe } from '@/lib/types';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  
  useEffect(() => {
    loadFavorites();
  }, []);
  
  const loadFavorites = () => {
    setFavorites(getFavoriteRecipes());
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold">My Favorites</h1>
        <p className="text-muted-foreground">Your saved recipes</p>
      </div>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No favorites yet</p>
          <Link to="/" className="text-primary hover:underline">
            Discover recipes to save
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {favorites.map(recipe => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} onFavoriteChange={loadFavorites} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
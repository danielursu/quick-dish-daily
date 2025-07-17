import { Clock, Users, Heart, ChefHat } from 'lucide-react';
import { Recipe } from '@/lib/types';
import { cn } from '@/lib/utils';
import { toggleFavorite, isFavorite } from '@/lib/data';
import { useState } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
  onFavoriteChange?: () => void;
}

const RecipeCard = ({ recipe, className, onFavoriteChange }: RecipeCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite(recipe.id));
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavoriteState = toggleFavorite(recipe.id);
    setFavorite(newFavoriteState);
    onFavoriteChange?.();
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'Hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };
  
  const getCategoryBadge = (tag: string) => {
    switch (tag) {
      case 'vegetarian': return 'badge-vegetarian';
      case 'vegan': return 'badge-vegan';
      case 'protein': return 'badge-protein';
      case 'quick': return 'badge-quick';
      default: return 'bg-muted text-muted-foreground';
    }
  };
  
  return (
    <div className={cn('recipe-card group cursor-pointer', className)}>
      {/* Hero Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={recipe.heroImage} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 gradient-overlay" />
        
        {/* Favorite button */}
        <button
          onClick={handleFavoriteClick}
          className={cn(
            'absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 tap-target',
            favorite 
              ? 'bg-destructive/20 text-destructive hover:bg-destructive/30' 
              : 'bg-background/20 text-muted-foreground hover:bg-background/40 hover:text-foreground'
          )}
        >
          <Heart 
            size={16} 
            className={cn('transition-all', favorite && 'fill-current scale-110')} 
          />
        </button>
        
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <div className={cn(
            'flex items-center space-x-1 px-2 py-1 rounded-full bg-background/20 backdrop-blur-sm text-xs font-medium',
            getDifficultyColor(recipe.difficulty)
          )}>
            <ChefHat size={12} />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
        
        {/* Recipe info overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-semibold text-card-foreground mb-2 text-shadow">
            {recipe.name}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-card-foreground/90">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{recipe.prepMinutes + recipe.cookMinutes}min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={14} />
                <span>{recipe.servings}</span>
              </div>
            </div>
            
            {recipe.calories && (
              <div className="text-xs bg-background/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {recipe.calories} cal
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={cn(
                'px-2 py-1 text-xs font-medium rounded-full capitalize',
                getCategoryBadge(tag)
              )}
            >
              {tag}
            </span>
          ))}
          {recipe.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
              +{recipe.tags.length - 3}
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {recipe.cuisine} • {recipe.ingredients.length} ingredients
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
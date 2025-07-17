import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, RefreshCw, Heart, ShoppingCart } from 'lucide-react';
import RecipeCard from '@/components/RecipeCard';
import { getTodaysPicks } from '@/lib/data';
import { DailyPicks } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Home = () => {
  const [dailyPicks, setDailyPicks] = useState<DailyPicks | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  useEffect(() => {
    loadDailyPicks();
  }, []);
  
  const loadDailyPicks = () => {
    setDailyPicks(getTodaysPicks());
  };
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    loadDailyPicks();
    setIsRefreshing(false);
  };
  
  if (!dailyPicks) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading today's picks...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="text-primary animate-bounce-gentle" size={24} />
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Today's Picks
          </h1>
          <Sparkles className="text-accent animate-bounce-gentle" size={24} />
        </div>
        
        <p className="text-muted-foreground max-w-md mx-auto">
          Three delicious recipes carefully selected for you today. 
          Swipe through and find your perfect meal!
        </p>
        
        <Button
          onClick={handleRefresh}
          disabled={isRefreshing}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <RefreshCw className={cn('h-4 w-4', isRefreshing && 'animate-spin')} />
          {isRefreshing ? 'Refreshing...' : 'Refresh Picks'}
        </Button>
      </div>
      
      {/* Recipe Cards */}
      <div className="space-y-6">
        {dailyPicks.recipes.map((recipe, index) => (
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block"
          >
            <div className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <RecipeCard 
                recipe={recipe} 
                className="hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Link to="/favorites">
          <Button variant="secondary" className="w-full gap-2 h-12">
            <Heart className="h-4 w-4" />
            My Favorites
          </Button>
        </Link>
        
        <Link to="/shopping">
          <Button variant="outline" className="w-full gap-2 h-12">
            <ShoppingCart className="h-4 w-4" />
            Shopping List
          </Button>
        </Link>
      </div>
      
      {/* Stats Section */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">Today's Summary</h3>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-xs text-muted-foreground">New Recipes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {dailyPicks.recipes.reduce((total, recipe) => total + (recipe.prepMinutes + recipe.cookMinutes), 0)}
            </div>
            <div className="text-xs text-muted-foreground">Total Minutes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success">
              {Math.round(dailyPicks.recipes.reduce((total, recipe) => total + (recipe.calories || 0), 0) / 3)}
            </div>
            <div className="text-xs text-muted-foreground">Avg Calories</div>
          </div>
        </div>
      </div>
      
      {/* Discover More */}
      <div className="text-center space-y-4 py-8">
        <h3 className="text-lg font-semibold text-foreground">Want more recipes?</h3>
        <p className="text-sm text-muted-foreground">
          Check out your saved favorites or browse by category
        </p>
        
        <div className="flex gap-3 justify-center">
          <Link to="/favorites">
            <Button variant="default" size="sm" className="gap-2">
              View Favorites
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { useState, useEffect } from 'react';
import { ShoppingCart, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getShoppingList, toggleShoppingListItem, clearShoppingList } from '@/lib/shopping-list';
import { ShoppingList } from '@/lib/types';

const Shopping = () => {
  const [list, setList] = useState<ShoppingList | null>(null);
  
  useEffect(() => {
    setList(getShoppingList());
  }, []);
  
  const handleToggle = (itemId: string) => {
    toggleShoppingListItem(itemId);
    setList(getShoppingList());
  };
  
  const handleClear = () => {
    clearShoppingList();
    setList(getShoppingList());
  };
  
  if (!list) return <div>Loading...</div>;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Shopping List</h1>
        </div>
        
        {list.items.length > 0 && (
          <Button onClick={handleClear} variant="outline" size="sm">
            Clear All
          </Button>
        )}
      </div>
      
      {list.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Your shopping list is empty</p>
        </div>
      ) : (
        <div className="space-y-2">
          {list.items.map(item => (
            <div 
              key={item.id}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            >
              <button
                onClick={() => handleToggle(item.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item.checked 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-border'
                }`}
              >
                {item.checked && <Check size={12} />}
              </button>
              
              <div className={`flex-1 ${item.checked ? 'line-through text-muted-foreground' : ''}`}>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">
                  {item.quantity} {item.unit}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shopping;
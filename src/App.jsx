// src/App.jsx
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';
import './App.css';



const App = () => {
  const [stack, setStack] = useState([]);
  
  const addToBurger = (newIngredient) => {
    console.log(stack)
    setStack([...stack, newIngredient]);
  };

  const removeFromBurger = (ingredientToRemove) => {
    let found = false; // ensures only first ingredient is removed
    const updatedStack = stack.filter( ingredient => {
        if (ingredient.name === ingredientToRemove.name && !found) {
          found = true;
          return false;
        }
        return true;
      }
    );
    setStack(updatedStack);
  };
  
    const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList 
          availableIngredients={availableIngredients} 
          addToBurger={addToBurger}
        />

        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;

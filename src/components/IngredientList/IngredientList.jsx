const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index} >
            {ingredient.name}
            <button onClick={() => props.addToBurger(ingredient) }>+</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map( (ingredient, index) => {
        return(
          <li style={{ backgroundColor: ingredient.color}} key={index}>
            {ingredient.name}
            <button onClick={ () => props.removeFromBurger(ingredient) }>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
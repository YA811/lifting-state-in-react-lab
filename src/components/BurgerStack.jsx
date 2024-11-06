// `src/components/BurgerStack.jsx`
const BurgerStack = (props, removeFromBurger) => {
    return <ul>
        {props.ingredients.map((ingredient) => (
           <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => {removeFromBurger(ingredient)}}>-</button>
            </li>
        ))}
    </ul>;
  };
  
  export default BurgerStack;
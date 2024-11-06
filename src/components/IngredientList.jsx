// src/components/IngredientList.jsx

const IngredientList = ({availableIngredent, addToBurger}) => {
  
    return <ul>
        {availableIngredent.map((ingredient) => (
           <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => {addToBurger(ingredient)}}>+</button>
            </li>
        ))}
  
    </ul>;
  };
  
  export default IngredientList;
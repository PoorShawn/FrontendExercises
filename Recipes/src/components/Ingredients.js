import React from "react";

export default function ({ingredients}) {
  return (
    <>
      <h2>Ingredients: </h2>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            name: {ingredient.name}
            amount: {ingredient.amount}
            measurement: {ingredient.measurement}
          </li>
        ))}
      </ul>
    </>
  )
}
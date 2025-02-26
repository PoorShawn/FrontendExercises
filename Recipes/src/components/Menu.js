import React from "react";

import Recipe from "./Recipe";

export default function ({recipes}) {
  return (
    <section>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div>
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </section>
  )
}
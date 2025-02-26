import React from "react";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

export default function Recipe(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <div className="ingredients">
        <Ingredients ingredients={props.ingredients}/>
        <Instructions title={"steps"} steps={props.steps}/>
      </div>
    </section>
  )
}
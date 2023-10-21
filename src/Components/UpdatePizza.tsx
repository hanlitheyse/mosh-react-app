import React from "react";

interface Props {
  toppings: string[];
  onUpdate: () => void;
}

const UpdatePizza = ({ toppings, onUpdate }: Props) => {
  return (
    <div>
      <ul>
        {toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={onUpdate}>Update Topping</button>
    </div>
  );
};

export default UpdatePizza;

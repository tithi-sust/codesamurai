import { useState } from "react";
import { toppings } from "./utils/toppings";
import "./style.css";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          sum = toppings[index].name;
          return sum;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
    console.log(totalPrice);
  };

  return (
    <div className="App">
      <h3>Select Role</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, values }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{values}</label>
                </div>
                
              </div>
            </li>
          );
        })}
  
      </ul>
    </div>
  );
}

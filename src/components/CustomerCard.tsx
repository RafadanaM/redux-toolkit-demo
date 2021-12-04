import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface CustomerCardI {
  id: string;
  name: string;
  foods: string[];
}

export const CustomerCard = ({ id, name, foods }: CustomerCardI) => {
  const dispatch = useDispatch();
  const [foodInput, setFoodInput] = useState("");

  const handleAddFood = () => {
    if (!foodInput) return;
    dispatch(addFood({ id, food: foodInput }));
    setFoodInput("");
  };
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food, idx) => (
            <p key={idx}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

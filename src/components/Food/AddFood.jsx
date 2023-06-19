import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../Store/action";

const AddFood = () => {
  const [foodName, setFoodName] = useState("");

  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.addFood);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addName(foodName));
    setFoodName("");
  };

  const handleChange = (event) => {
    setFoodName(event.target.value);
  };

  console.log(foodList);
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#0071c5] flex flex-col justify-center items-center gap-5 p-6 mt-10 w-1/2 h-72 ml-auto mr-auto rounded-3xl">
        <label className="text-white font-bold text-2xl">Food Name</label>
        <input
        className="h-12 rounded-lg"
          type="text"
          id="name"
          name="name"
          value={foodName}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-orange-400 p-4 text-white rounded-xl"
        >
          {" "}
          Add
        </button>
      </div>
    </form>
  );
};

export default AddFood;

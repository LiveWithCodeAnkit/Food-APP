import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import ErrorPage from "../ErrorPage/ErrorPage";
import { addQty, removeQty } from "../Store/action";

const Foods = () => {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.addFood.names);
  const qty = useSelector((state) => state.addFood.qty);

  const handleAddQty = (event) => {
    event.preventDefault();
    dispatch(addQty());
  };

  const handleRemQty = (event) => {
    event.preventDefault();
    dispatch(removeQty());
  };
  if (foodList.length <= 0) {
    return <ErrorPage message="No data in the database" />;
  } else {
    return (
      <>
        <div className="text-2xl flex flex-col justify-center items-center p-32 gap-3">
          {foodList.map((item, index) => (
            <div
              className="bg-[#0071c5] p-3 flex justify-evenly items-center gap-4 w-60"
              key={index}
            >
              <label className="text-white">{item}...</label>
              <button onClick={handleAddQty}>
                <BsPlusCircleFill className="text-white" />
              </button>{" "}
              <label className="text-white">{qty}</label>
              <button
                onClick={handleRemQty}
                disabled={qty <= 1 ? "disabled" : ""}
              >
                <AiFillMinusCircle className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Foods;

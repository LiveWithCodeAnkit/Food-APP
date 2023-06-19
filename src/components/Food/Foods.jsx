import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";

const Foods = () => {
  const foodList = useSelector((state) => state.addFood.names);

  if (foodList.length <= 0) {
    return <ErrorPage message="No data In DataBase" />;
  } else {
    return (
      <div className="text-2xl flex flex-col justify-center items-center p-32 gap-3">
        {foodList.map((item, index) => (
          <div className="bg-red-300 p-3" key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
};

export default Foods;

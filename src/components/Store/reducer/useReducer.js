const initialState = {
  names: [],
  qty: 1,
};

const addFoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      console.log("state.aaaa.", state.names);
      const updatedNames = [...state.names, action.payload];

      localStorage.setItem("foodNames", JSON.stringify(updatedNames));
      return {
        ...state,
        names: [...state.names, action.payload],
      };
    case "ADDQty":
      return {
        ...state,
        qty: state.qty + 1,
      };
    case "RemoveQty":
      return {
        ...state,
        qty: state.qty - 1,
      };

    default:
      return state;
  }
};

export default addFoodReducer;

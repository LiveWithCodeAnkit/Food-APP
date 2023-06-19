const initialState = {
  names: [],
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
      
    default:
      return state;
  }
};

export default addFoodReducer; 

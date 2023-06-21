export const addName = (foodName) => { 
    return {
      type: "ADD",
      payload: foodName, 
    };
  };
  
  export const addQty=(countNum)=>{
    return{
      type:"ADDQty",
      payload:countNum,
    };
  }

  export const removeQty=(countNum)=>{
    return{
        type:"RemoveQty",
        payload:countNum,
    };
  }
/** @format */

//define all application level states and actions to make changes to the state
export const initialState = {
  //store products pushed to data layer
  basket: [],
};

//reducer uses 2 arguments
//ie. state and actions

//state - current state of our data layer
//action - make changes to the state
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //the complete previous state
        ...state,
        //adding a new item to the basket
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;

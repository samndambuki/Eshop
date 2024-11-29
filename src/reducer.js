/** @format */

//define all application level states and actions to make changes to the state
export const initialState = {
  //store products pushed to data layer
  basket: [],
};

//selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
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

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id:${action.id}) as its not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;

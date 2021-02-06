import React from "react";

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return { cart: [...state.cart].concat(action.item) };
    }
    case "REMOVE_ITEM": {
      return { cart: [...state.cart] };
    }
    default:
      console.log("error");
  }
};

const CartStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { cart: [] });
  
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

const useCartState = () => {
  const context = React.useContext(CartStateContext);

  return context;
};

const useCartDispatch = () => {
  const context = React.useContext(CartDispatchContext);

  return context;
};

export { CartStateProvider, useCartState, useCartDispatch };

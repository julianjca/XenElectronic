import React from "react";

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemIndex = [...state.cart].findIndex(item => item.id === action.item.id)
      const newCart = [...state.cart]

      if (itemIndex > -1) {
        newCart[itemIndex].count += 1
      } else {
        newCart.push({ ...action.item, count: 1 })
      }

      return { cart: newCart };
    }
    case "REMOVE_ITEM": {
      const itemIndex = [...state.cart].findIndex(item => item.id === action.item.id)
      let newCart = [...state.cart]

      if (itemIndex > -1) {
        if (newCart[itemIndex].count > 1) {
          newCart[itemIndex].count -= 1
        } else {
          newCart = newCart.filter(item => {
            return item.id !== action.item.id
          } )
        }
      }

      return { cart: newCart };
    }
    case "CLEAR_CART": {
      return { cart: [] };
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

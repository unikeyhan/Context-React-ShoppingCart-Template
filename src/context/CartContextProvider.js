import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsConter: 0,
  total: 0,
  checkOut: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
        return {
          ...state,
          selectedItems: [...state.selectedItems],
        };
      }
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex((item) => {
        item.id === action.payload.id;
      });
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexB = state.selectedItems.findIndex((item) => {
        item.id === action.payload.id;
      });
      state.selectedItems[indexB].quantity--;
      return {
        ...state,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsConter: 0,
        total: 0,
        checkOut: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsConter: 0,
        total: 0,
        checkOut: false,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

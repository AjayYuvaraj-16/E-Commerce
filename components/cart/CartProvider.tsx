"use client";
import React, { useState } from "react";
import { useReducer, useEffect } from "react";
import {
  cartReducer,
  CartContext,
  Product,
  ProductWishlist,
  ICompareList,
  IAddressProps
} from "./CartContextApi";

interface IcartProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  cart: [],
  wishlistItems: [],
  compareList: [],
  AddressList: []
};
const CartProvider = ({ children }: IcartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("WishListItems");
    const savedCompareList = localStorage.getItem("compareList");
    const savedAddressList = localStorage.getItem("AddressList");


    if (savedCompareList) {
      dispatch({ type: "LOAD_COMPARE", payload: JSON.parse(savedCompareList) });
    }

    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
    if (savedWishlist) {
      dispatch({ type: "LOAD_WISHLIST", payload: JSON.parse(savedWishlist) });
    }

    if (savedAddressList) {
      dispatch({ type: "LOAD_ADDRESS", payload: JSON.parse(savedAddressList) });
    }

    }
  }, []);

  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
      localStorage.setItem("WishListItems", JSON.stringify(state.wishlistItems));
  }, [state.wishlistItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
        localStorage.setItem("compareList", JSON.stringify(state.compareList));
      }
  }, [state.compareList]);


  useEffect(() => {
    if (typeof window !== "undefined") {
        localStorage.setItem("AddressList", JSON.stringify(state.AddressList));
      }
  }, [state.AddressList]);


  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const updateQuantity = (id: number, delta: number) => {
    console.log("Updating quantity:", { id, delta });
    dispatch({ type: "UPDATE_CART", payload: { id, delta } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const addToWishlist = (product: ProductWishlist) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (id: number) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const moveToCart = (id: number) => {
    dispatch({ type: "MOVE_TO_CART", payload: id });
  };

  const addToCompare = (product: ICompareList) =>
    dispatch({ type: "ADD_TO_COMPARE", payload: product });

  const removeFromCompare = (id: number) =>
    dispatch({ type: "REMOVE_FROM_COMPARE", payload: id });

  const clearCompare = () => dispatch({ type: "CLEAR_COMPARE" });

  const addAddress = (address: IAddressProps) => {
    dispatch({ type: "ADD_ADDRESS", payload: address });
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        addAddress,
        removeFromCart,
        clearCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

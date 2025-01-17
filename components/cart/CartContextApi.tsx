"use client";

import React, { createContext, useContext } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  discountedPrice?: number;
  discountPercentage?: number;
}

export interface ProductWishlist {
  id: number;
  name?: string;
  price?: number;
  image?: string;
  discountedPrice?: number;
  discountPercentage?: number;
  shortDescription?: string;
  quantity: number;
}

export interface ICompareList {
  id: number;
  name?: string;
  price?: number;
  image?: string;
  discountedPrice?: number;
  discountPercentage?: number;
  shortDescription?: string;
  quantity: number;
  description?: string;
  reviews?: string;
  specification?: Array<{}>;
}

export interface IAddressProps {
  id?: number;
  label?: string;
  type?: string;
  details: string;
  pincode: number;
}

export interface CartState {
  cart: Product[];
  wishlistItems: ProductWishlist[];
  compareList: ICompareList[];
  AddressList: IAddressProps[];
}

export interface CartContextType extends CartState {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, delta: number) => void;
  addToWishlist: (product: ProductWishlist) => void;
  removeFromWishlist: (id: number) => void;
  moveToCart: (id: number) => void;
  addToCompare: (product: ICompareList) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
  addAddress: (address: IAddressProps) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const cartReducer = (state: CartState, action: any): CartState => {
  console.log("Current State:", state);
  console.log("Action:", action);

  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, wishlistItems: action.payload || [] };

    case "LOAD_CART":
      return { ...state, cart: action.payload || [] };

    case "LOAD_COMPARE":
      return {
        ...state,
        compareList: action.payload || [],
      };
    case "LOAD_ADDRESS":
      return {
        ...state,
        AddressList: action.payload || [],
      };

    case "ADD_ADDRESS": {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for ADD_ADDRESS:", action.payload);
        return state;
      }

      const existingAddress = state.AddressList.find(
        (item) => item.id === action.payload.id
      );

      if (existingAddress) {
        return state; // Address already in Address list
      }

      if (state.AddressList.length >= 3) {
        console.warn("Maximum of 3 Address can be added.");
        return state;
      }

      return {
        ...state,
        AddressList: [...state.AddressList, action.payload],
      };
    }

    case "UPDATE_ADDRESS":
      return {
        ...state,
        AddressList: state.AddressList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                details: "",
              }
            : item
        ),
      };

    case "REMOVE_ADDRESS": {
      const updatedAddresslist = state.AddressList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        AddressList: updatedAddresslist,
      };
    }
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + action.payload.delta),
              }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "ADD_TO_WISHLIST": {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for ADD_TO_WISHLIST:", action.payload);
        return state;
      }
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return state;
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const updatedWishlist = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      // console.log("Updated Wishlist:", updatedWishlist);
      return {
        ...state,
        wishlistItems: updatedWishlist,
      };
    }
    case "MOVE_TO_CART": {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for MOVE_TO_CART:", action.payload);
        return state;
      }
      const itemToMove = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToMove) {
        return state; // Item not in wishlist
      }
      // return {
      //   ...state,
      //   wishlistItems: state.wishlistItems.filter(
      //     (item) => item.id !== action.payload.id
      //   ),
      //   cart: [...state.cart, { ...itemToMove, quantity: 1 }],
      // };
    }
    case "ADD_TO_COMPARE": {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for ADD_TO_COMPARE:", action.payload);
        return state;
      }

      const existingProduct = state.compareList.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return state; // Product already in compare list
      }

      if (state.compareList.length >= 6) {
        console.warn("Maximum of 6 products can be compared.");
        return state;
      }

      return {
        ...state,
        compareList: [...state.compareList, action.payload],
      };
    }

    case "REMOVE_FROM_COMPARE": {
      const updatedComparelist = state.compareList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        compareList: updatedComparelist,
      };
    }
    default:
      return state;
  }
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

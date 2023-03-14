import { ADD_PODUCT, MODIFY_PODUCT, DELETE_PODUCT } from "../types";

export const addProduct = (product) => {
  return { type: ADD_PODUCT, payload: product };
};

export const deleteProduct = (product) => {
  return { type: "ss", payload: product };
};

export const modifyProduct = (product) => {
  return { type: "ss", payload: product };
};

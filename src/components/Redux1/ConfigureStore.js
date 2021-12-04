import { createStore } from "redux";
import { Reducer, innitialSate } from "./Reducer";

export const ConfigureStore = () => {
  const store = createStore(
    Reducer, // reducer
    innitialSate // our initialState
  );

  return store;
};

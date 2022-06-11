import { createContext, useReducer, useContext } from "react";
import { IActions, initialState, IState, reducer } from "./store";

const Context = createContext<{
  state: IState;
  dispatch: React.Dispatch<IActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useStore = () => useContext(Context);
const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Store;

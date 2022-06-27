import TABNAMES from "./tabNames";

export interface IState {
  test: string;
  tabs: ITab[];
}

export interface ITab {
  path: string;
  name: string;
}

export enum ActionTypes {
  OpenTab = "OPEN_TAB",
  CloseTab = "CLOSE_TAB",
  FocusTab = "FOCUS_TAB",
}

interface ActionPayloads {
  [ActionTypes.OpenTab]: string;
  [ActionTypes.CloseTab]: string;
  [ActionTypes.FocusTab]: string;
}
export type IActions =
  ActionMap<ActionPayloads>[keyof ActionMap<ActionPayloads>];

export const initialState: IState = {
  test: "dumb dumb",
  tabs: [{ name: TABNAMES["/"], path: "/" }],
};

export const reducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.OpenTab: {
      const openPaths = [...state.tabs].map((tab) => tab.path);
      if (openPaths.includes(action.payload)) {
        return state;
      }

      const path: string = action.payload;
      const newTabs = [
        ...state.tabs,
        { name: TABNAMES[path] || path.replace("/", ""), path },
      ];

      return { ...state, tabs: newTabs };
    }
    case ActionTypes.CloseTab: {
      if (state.tabs.length === 1) return state;

      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab.path !== action.payload),
      };
    }
    case ActionTypes.FocusTab: {
      return {
        ...state,
        tabs: state.tabs.map((tab) => ({
          ...tab,
          active: tab.path === action.payload,
        })),
      };
    }

    default:
      return state;
  }
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

import {createContext, Dispatch, ReactNode, useReducer} from "react";

interface IContext {
  state: {
    loading: boolean;
    searchWord: string;
    error: string;
  };
  dispatch: Dispatch<ActionType>;
}

const initialState = {
  loading: false,
  searchWord: "",
  error: "",
};

type ActionType =
  | {
      type: "FETCH-WORD";
    }
  | {
      type: "FETCH-WORD_SUCCESS";
      payload: string;
    }
  | {
      type: "FETCH-WORD_ERROR";
      payload: string;
    };

export const AppContext = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

const appReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "FETCH-WORD":
      return {
        ...state,
        loading: true,
      };
    case "FETCH-WORD_SUCCESS":
      return {
        ...state,
        loading: false,
        searchWord: action.payload,
      };
    case "FETCH-WORD_ERROR":
      return {
        ...state,
        loading: false,
        searchWord: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
};

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isAuthLoading: true };
    case "login/accepted":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "login/denied":
      return { ...state, error: "Error" };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "rejected":
      return {
        ...state,

        isAuthenticated: false,
        error: action.payload && "There was an error in loading  the cities",
      };
    default:
      throw new Error("Invalid Action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login/accepted", payload: FAKE_USER });
    else dispatch({ type: "login/denied" });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };

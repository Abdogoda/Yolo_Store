import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";
import reducer from "./reducer";
import productData from "../assets/fake-data/products";
const AppContext = createContext();
const initialState = {
  showModal: false,
  modalSlug: null,
  products: productData.getAllProducts(),
  cart: [],
  amount: 0,
  total: 0,
  message: "",
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  user: JSON.parse(localStorage.getItem("user") || null),
  haveAcount: localStorage.getItem("haveAcount") || false,
  theme: localStorage.getItem("theme") || "light",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // user functions
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  useEffect(() => {
    localStorage.setItem("haveAcount", state.haveAcount);
  }, [state.haveAcount]);
  const setNewUser = (user) => {
    dispatch({ type: "SET_NEW_USER", payload: user });
  };
  const loginUser = (user) => {
    dispatch({ type: "LOGIN_USER", payload: user });
  };
  const logoutHandle = () => {
    dispatch({ type: "LOGOUT" });
  };
  // modal function
  const openModal = (toggle, slug) => {
    return dispatch({
      type: "TOGGLE__MODAL",
      payload: { toggle: toggle, slug: slug },
    });
  };
  // cart functions
  const addToCart = (slug, color, size, amount) => {
    return dispatch({
      type: "ADD__TO__CART",
      payload: { slug, color, size, amount },
    });
  };
  const incProduct = (slug) => {
    return dispatch({
      type: "INC__PRODUCT",
      payload: slug,
    });
  };
  const decProduct = (slug) => {
    return dispatch({
      type: "DEC__PRODUCT",
      payload: slug,
    });
  };
  const delProduct = (slug) => {
    return dispatch({
      type: "DEL__PRODUCT",
      payload: slug,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: "DEL__CART",
    });
  };
  useEffect(() => {
    return dispatch({
      type: "GET__TOTAL__AMOUNT",
    });
  }, [state.cart]);
  // clear message function
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_MESSAGE" });
    }, 5000);
  }, [state.message]);
  // theme functions
  const toggleTheme = () => {
    return dispatch({ type: "TOGGLE__THEME" });
  };
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        addToCart,
        decProduct,
        incProduct,
        delProduct,
        clearCart,
        setNewUser,
        loginUser,
        logoutHandle,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

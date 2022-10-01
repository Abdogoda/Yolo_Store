const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_MESSAGE":
      return { ...state, message: "" };
      break;
    case "SET_NEW_USER":
      const oldUser = state.users.find((x) => x.email === action.payload.email);
      if (oldUser) {
        return { ...state, message: "You Already Have an Account!!" };
      } else {
        return {
          ...state,
          users: [
            ...state.users,
            { id: new Date().getTime().toString(), ...action.payload },
          ],
          message: "You Have Created Your Account Successfully",
        };
      }
      break;
    case "LOGIN_USER":
      const AUser = state.users.find(
        (x) =>
          x.email === action.payload.email &&
          x.password === action.payload.password
      );
      if (AUser) {
        return {
          ...state,
          user: AUser,
          haveAcount: true,
          message: "You Are In",
        };
      } else {
        return {
          ...state,
          haveAcount: false,
          message: "You Don't Have An Account!!",
        };
      }
      break;
    case "LOGOUT":
      return {
        ...state,
        user: {},
        haveAcount: false,
        message: "",
      };
      break;
    case "TOGGLE__MODAL":
      if (action.payload.toggle == false) {
        return { ...state, showModal: false, modalSlug: null };
      } else if (action.payload.toggle == true) {
        return {
          ...state,
          showModal: true,
          modalSlug: action.payload.slug,
        };
      }
      break;
    case "ADD__TO__CART":
      const searchProduct = state.cart.find(
        (x) => x.slug == action.payload.slug
      );
      if (searchProduct) {
        const oldIncCart = state.cart.map((product) => {
          if (product.slug === action.payload.slug) {
            return {
              ...product,
              amount: product.amount + action.payload.amount,
              choosenColor: [...product.choosenColor, action.payload.color],
              choosenSize: [...product.choosenSize, action.payload.size],
            };
          }
          return product;
        });
        return {
          ...state,
          cart: oldIncCart,
        };
      } else {
        const newProduct = state.products.find(
          (product) => product.slug === action.payload.slug
        );
        const newCart = [
          ...state.cart,
          {
            ...newProduct,
            amount: action.payload.amount,
            choosenColor: [action.payload.color],
            choosenSize: [action.payload.size],
          },
        ];
        return {
          ...state,
          cart: newCart,
        };
      }
      break;
    case "INC__PRODUCT":
      const newIncCart = state.cart.map((product) => {
        if (product.slug == action.payload) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
      return {
        ...state,
        cart: newIncCart,
      };
      break;
    case "DEC__PRODUCT":
      const newDecCart = state.cart
        .map((product) => {
          if (product.slug == action.payload) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        })
        .filter((x) => x.amount !== 0);
      return {
        ...state,
        cart: newDecCart,
      };
      break;
    case "DEL__PRODUCT":
      const newDelCart = state.cart.filter(
        (product) => product.slug !== action.payload
      );
      return {
        ...state,
        cart: newDelCart,
      };
      break;
    case "DEL__CART":
      return {
        ...state,
        cart: [],
        amount: 0,
        total: 0,
      };
      break;
    case "GET__TOTAL__AMOUNT":
      const { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      return { ...state, amount, total };
      break;
    case "TOGGLE__THEME":
      if (state.theme == "dark") {
        return { ...state, theme: "light" };
      } else if (state.theme == "light") {
        return { ...state, theme: "dark" };
      }
      break;

    default:
      break;
  }
  return state;
};
export default reducer;

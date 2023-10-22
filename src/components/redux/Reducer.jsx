import * as actions from "./Actions";

const initialState = {
  list: localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [],
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  theme : localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "dark",
  language :  localStorage.getItem("language") ? (localStorage.getItem("language")) : "en",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_LIST:
      return {
        ...state,
        list: [action.payload],
      };
    case actions.ADD_ITEM_TO_CART:
      const updatedCart = [...state.cart, { ...action.payload, size: action.size , id : Date.now()}];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case actions.REMOVE_ITEM_FROM_CART :
      const updatedRemovedCart = state.cart.filter((i)=> i.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(updatedRemovedCart))
      return{
        ...state,
        cart : updatedRemovedCart,
      }
    case actions.TOGGLE_THEME :
      const tt = state.theme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", JSON.stringify(tt))
      return{
        ...state,
        theme : tt
      }
      case actions.PERFORM_LANGUAGE:
        const ll = action.payload
        localStorage.setItem("language", ll)
        return{
          ...state,
          language : ll,
        }
            
    default:
      return state;
  }
};

export default Reducer;
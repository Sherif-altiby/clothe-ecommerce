import * as actions from './Actions'


export const addItemToList =(item)=>{
  localStorage.setItem("list", JSON.stringify([item]))
  return {
    type : actions.ADD_ITEM_TO_LIST ,
    payload : item,
  }
}

export const addItemToCart = (item, s)=>{
  return{
    type : actions.ADD_ITEM_TO_CART,
    payload : item,
    size : s,
  }
} 

export const removeItemFromCart = (id)=>{
  return{
    type : actions.REMOVE_ITEM_FROM_CART,
    payload : id,
  }
}

export const toggleTheme = ()=>{
  return{
    type : actions.TOGGLE_THEME
  }
}

export const performLanguage = (language)=>{
  return{
    type : actions.PERFORM_LANGUAGE,
    payload : language
  }
}

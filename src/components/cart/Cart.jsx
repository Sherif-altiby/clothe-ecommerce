import { Link } from 'react-router-dom'
import  './Cart.scss'
import CartItem from '../cartItem/CartItem'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from 'react';

const Cart = ({cartBlock, removeCart}) => {
  
  const items = useSelector(state => state.cart)

  const language = useSelector(state => state.language)
  const {t} = useTranslation();
  
  // useEffect(()=>{
  //   i18next.changeLanguage(language)
  // }, [language])

  return (
    <div className={cartBlock ? "cart block" : "cart"} >
       <div className="cart_head">
        <div className="exite" onClick={removeCart} >X</div>
        <div className="subtotal">
          {t('subtotal')}: <span>  $0.00 </span>
        </div>
       </div>
       <div className="cart_body">
       
       { items.map((item)=> <CartItem item={item} key={item.id} />) }

       </div>
       <div className="checkout">
        <Link to="/checkout" onClick={removeCart} > {t('checkout')} </Link>
       </div>
    </div>
  )
}

export default Cart
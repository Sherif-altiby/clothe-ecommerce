import "./Checkout.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";

const Checkout = () => {
  
  const items = useSelector(state => state.cart)
  const theme = useSelector(state => state.theme)
  const price = items.reduce((acc, cur)=> acc + +cur.price , 0)
  const total = price + 15

  const language = useSelector(state => state.language)
  const {t} = useTranslation();
  
  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])
  
  return (
    <div className={theme === "dark" ? "checkout" : "checkout light"}>
      <div className="checkout_main">
        <h1> {t('shoping-cart')} </h1>
      </div>
      <section>
      <div className="checkout_cart">
        <h2> {t('ordersummary')} </h2>
        <div className="text">
          <p> {t('subtotal')}: ${price} </p>
          <p>{t('shipping')}: $15</p>
        </div>
        <h3>{t('total')}: ${total}</h3>
        <div className="btn">{t('checkout')}</div>
      </div>
      </section>
    </div>
  );
};

export default Checkout;

import "./Women.scss";
import cards from "../../components/data/Data";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { addItemToList } from "../../components/redux/ActionFunctions";
import {connect} from 'react-redux';     
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "../../components/i18n";

const Women = (props) => {
  
  let womenArr = cards.filter((i)=> i.gender === "women")
  const [filter, setFilter] = useState("");
  const theme = useSelector(state => state.theme)
  const language = useSelector(state => state.language)
  const {t} = useTranslation();
  
  useEffect(()=>{
    i18n.changeLanguage(language)
  }, [language])


  if (filter === "high")   {womenArr = womenArr.sort((a, b) => b.price - a.price)}

  if (filter === "low")    { womenArr = womenArr.sort((a, b) => a.price - b.price)}
 
  if (filter === "Top")    {womenArr = womenArr.filter((i) => i.type === "Top")}

  if (filter === "Shoes")  {womenArr = womenArr.filter((i) => i.type === "Shoes")}

  if (filter === "Accessories"){womenArr = womenArr.filter((i) => i.type === "Accessories")}

  return (
    <>
      <section className="women_home">
        <h1>{t('womens')}</h1>
        <ul className="filter">
          <li>
            <select id=""  onChange={(e) => setFilter(e.target.value)} >
              <option value="none">Sort</option>
              <option value="default"> Default </option>
              <option value="high"> Price : Highest </option>
              <option value="low"> Price : Lowest </option>
            </select>
          </li>

          <li>
            <select id=""  onChange={(e) => setFilter(e.target.value)} >
              <option value="All">All Types</option>
              <option value="Top"> Top </option>
              <option value="Shoes"> Shoes </option>
              <option value="Accessories"> Accessories </option>
            </select>
          </li>
        </ul>
      </section>
      <section className={theme === "dark" ? "items_container container" : "items_container container light"}>
        {womenArr
          .map((i) => (
            <Link to="/buyitem" key={i.key} onClick={()=> props.addItemToList(i)} >    <Card item={i} /> </Link>
          ))}
      </section>
    </>
  );
};

const mapStateToProps = (state)=>{
  return{
    list : state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
  addItemToList : (item)=> dispatch(addItemToList(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps )  (Women);

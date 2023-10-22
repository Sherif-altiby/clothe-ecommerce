import "../women/Women.scss";
import cards from "../../components/data/Data";
import Card from "../../components/card/Card";
import { connect, useSelector } from "react-redux";
import { addItemToList } from "../../components/redux/ActionFunctions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Men = (props) => {
  let menArr = cards.filter((i) => i.gender === "men");
  const [filter, setFilter] = useState("");
  const theme = useSelector(state => state.theme)

  const language = useSelector(state => state.language)
  const {t} = useTranslation();

  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])


  if (filter === "high")   {menArr = menArr.sort((a, b) => b.price - a.price)}

  if (filter === "low")    {menArr = menArr.sort((a, b) => a.price - b.price)}

  if(filter === "Top")     {menArr = menArr.filter((i) => i.type === "Top")}

  if(filter === "Shoes")   {menArr = menArr.filter((i) => i.type === "Shoes")}

  if(filter === "Accessories"){menArr = menArr.filter((i) => i.type === "Accessories")}

  return (
    <>
      <section className="women_home men_home">
        <h1>{t('mens')}</h1>
        <ul className="filter">
          <li>
            <select id="" onChange={(e) => setFilter(e.target.value)} >
              <option value="none">Sort</option>
              <option value="default"> Default </option>
              <option value="high"> Price : Highest </option>
              <option value="low"> Price : Lowest </option>
            </select>
          </li>
          <li>
            <select id="" onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Top"> Top </option>
              <option value="Shoes"> Shoes </option>
              <option value="Accessories"> Accessories </option>
            </select>
          </li>
        </ul>
      </section>
      <section className={theme === "dark" ? "items_container container" : "items_container container light"}>
        {menArr.map((i) => (
          <Link
            to="/buyitem"
            key={i.key}
            onClick={() => props.addItemToList(i)}
          >
            <Card item={i} />
          </Link>
        ))}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToList: (item) => dispatch(addItemToList(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Men);

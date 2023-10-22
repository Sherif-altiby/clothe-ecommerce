import "./Card.scss";
import { useSelector } from "react-redux";

const Card = ({item}) => {

  const theme = useSelector(state => state.theme)

  return (
    <div className={theme === "dark" ? "card" : "card light"}   >
      <div className="img">
        <img src={item.src} alt="" />
      </div>
      <div className="info">
        <h3> {item.title} </h3>
        <h5> {item.brand} </h5>
        <p> {item.description} </p>
      </div>
      <div className="price">${item.price}</div>
    </div>
  );
};



export default  (Card);

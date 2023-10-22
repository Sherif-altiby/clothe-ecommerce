import "./BuyItem.scss";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../components/redux/ActionFunctions";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const BuyItem = (props) => {

  const item = useSelector((state) => state.list);
  const theme = useSelector(state => state.theme)

  const [size, setSize] = useState("");

  return (
    <>
      {item.map((item) => (
        <div className={theme === "dark" ? "buyItem" : "buyItem light" } key={item.key}>
          <div className="img">
            <img src={item.src} alt="" />
          </div>
          <div className="text">
            <p>{item.brand}</p>
            <h2>
              {item.title}
              <Link to={item.gender === "women" ? "/women" : "/men"}>
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </h2>
            <div className="price"> {item.price} </div>
            <div className="description">{item.description}</div>

            <div className="size">
              <select onChange={(e) => setSize(e.target.value)}>
                <option value="size"> Size </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="l"> L </option>
              </select>
              <div
                className="btn"
                onClick={() => props.addItemToCart(item, size)}
              >
                ADD TO CART
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item, s) => dispatch(addItemToCart(item, s)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyItem);

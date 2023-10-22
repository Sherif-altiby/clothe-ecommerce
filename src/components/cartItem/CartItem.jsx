import './CartItem.scss'
import { removeItemFromCart } from '../redux/ActionFunctions'
import { connect } from 'react-redux'


const CartItem = ({item, removeItemFromCart}) => {
  return (
    <div className='cart_item' >
      <div className="img"> 
       <img src={item.src} alt="" />
      </div>
      <div className="inf">
        <p> {item.title} </p>
        <p>${item.price}</p>
        <p>size: {item.size === "" ? "m" : item.size === "size" ? "m" : item.size}</p>
      </div>
      <div className="remove" onClick={ ()=> removeItemFromCart(item.id) } >X</div>
    </div>
  )
}

const mapStateToProps= (state)=>{
  return{
    cart : state.cart,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItemFromCart : (id)=> dispatch(removeItemFromCart(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)  (CartItem)
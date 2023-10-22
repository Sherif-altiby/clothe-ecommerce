import "./Theme.scss";
import { toggleTheme } from "../redux/ActionFunctions";
import { connect } from "react-redux";


const Theme = (props) => {

  return (
    <div className="theme" id={props.theme}  onClick={()=> props.toggleTheme()}  >
      <i className="fa-regular fa-sun light"></i>
      <i className="fa-regular fa-moon dark"></i>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    theme : state.theme,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    toggleTheme : ()=> dispatch(toggleTheme())
  }
}

export default  connect (mapStateToProps,mapDispatchToProps) (Theme);

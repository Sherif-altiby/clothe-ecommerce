import './languages.scss'
import eg from "../assets/img/contries/eg.webp"
import us from "../assets/img/contries/us.webp"
import { performLanguage } from '../redux/ActionFunctions'
import { connect } from 'react-redux'
import { useState } from 'react'

const Languages = (props) => {
  
  const [block, setBlock] = useState(false)
  
  const handleBlock = ()=>{
    setBlock(!block)
  }

  const arabic = "ar"
  const english = "en"

  return (
    <div className='language' onClick={handleBlock} >
      <div className="language_icon">
      <i className="fa-solid fa-globe"></i>
        <ul className={block === true ? "languages_list block" : "languages_list"} >
          <li onClick={()=>props.performLanguage(arabic)} > <img src={eg} alt="" /> Arabic </li>
          <li onClick={()=>props.performLanguage(english)}> <img src={us} alt="" /> English </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps= (state)=>{
  return{
    language : state.language,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    performLanguage : (language)=> dispatch(performLanguage(language))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Languages)
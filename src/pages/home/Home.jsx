import './Home.scss'
import video from '../../components/assets/videos/z.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' >
      <video id='video' src={video} autoPlay  loop ></video>
      <div className="home_collections">
          <Link to="/women" >  SS21 Collection  </Link>
          <Link to="/women" >  PW2O Collection  </Link>
      </div>
    </div>
  )
}

export default Home
import './App.scss';
import './components/theme/Theme.scss'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Women from './pages/women/Women';
import Men from './pages/men/Men';
import About from './pages/about/About';
import Search from './pages/search/Search';
import Checkout from './pages/checkout/Checkout';
import BuyItem from './pages/buyItem/BuyItem';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import Theme from './components/theme/Theme';



function App() {
  return (
    <Router>
      <Provider store={store} >
      <Nav />
      <Routes>
        <Route path='/'         element ={<Home     />} />
        <Route path='/women'    element ={<Women    />} />
        <Route path='/men'      element ={<Men      />} />
        <Route path='/about'    element ={<About    />} />
        <Route path='/search'   element ={<Search   />} />
        <Route path='/checkout' element ={<Checkout />} />
        <Route path='/buyitem'  element ={<BuyItem  />} />
      </Routes>
    <Theme  />
      </Provider>
    </Router>
  );
}

export default App;

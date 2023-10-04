import { Component } from 'react';
import HomeHeader from './Component/HomeHeader';
import HomeContent from './Component/HomeContent';
import HomeFooter from './Component/HomeFooter';
import './HomePage.scss';
class HomePage extends Component {

  
  render(){
   
    return(
      <div className='homepage-container'>
        <HomeHeader/>
        <HomeContent/>
        <HomeFooter/>
      </div>
    )
  }
}


export default HomePage;

import { Component } from 'react';
import './HomeHeader.scss';
import ContactMenu from './header/ContactMenu';
import HeaderMenu from './header/HeaderMenu';
import Banner from './header/Banner';
class HomeHeader extends Component{
    render(){
        return(
            <div className='home-header-container'>
                <ContactMenu/>
                <HeaderMenu/>
                <Banner/>
            </div>
        )
    }
}
export default HomeHeader;
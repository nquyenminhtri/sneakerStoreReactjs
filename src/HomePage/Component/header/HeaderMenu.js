import { Component } from 'react';
import './HeaderMenu.scss';
import '@fortawesome/fontawesome-free-webfonts';
class HeaderMenu extends Component{
    render(){
        return(
            <div className='headerMenu-container'>
                <div className='content-left'>
                    <div className='logo'>
                        <img src='/images/logo.webp'/>
                    </div>
                </div>
                <div className='content-center'>
                    <ul className='item-big'>
                        <li className='nav-item'><a><span>ALL VANS</span></a></li>
                        <li className='nav-item'>
                            <a><span>SHOES</span>
                                <i className="fas fa-caret-down"></i>  
                            </a>
                            {/* <ul className='item-small'>
                                        <li><a href='#'>VANS CLASSIC</a></li>
                                        <li><a>VANS VAULT</a></li>
                                        <li><a>VANS OLD SKOOL</a></li>
                                        <li><a>VANS SLIP-ON</a></li>
                                        <li><a>VANS AUTHENTIC</a></li>
                                        <li><a>VANS SK8</a></li>
                                        <li><a>VANS </a></li>
                                    </ul> */}
                        </li>
                        <li className='nav-item'><a><span>NEW ARRIVALS</span></a></li>
                        <li className='nav-item'><a><span>ACCESSORIES</span><i className="fas fa-caret-down"></i></a></li>
                        <li className='nav-item'><a><span>COLLECTIONS</span><i className="fas fa-caret-down"></i></a></li>
                        <li className='nav-item'><a><span>SALE OFF</span></a></li>
                        <li className='nav-item'><a><span>SIZE CHART</span></a></li>
                        <li className='nav-item'><a><span>ABOUT US</span></a></li>
                    </ul>
                </div>
                <div className='content-right'>
                    <div className='search-cart'>
                        <div className='search-item child-item'>
                            <i className="fas fa-search">
                                <div className='input' ><input type='text' placeholder='Search' /></div>
                            </i>
                            
                        </div>
                        <div className='cart-item child-item'><i className="fas fa-cart-plus"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderMenu;
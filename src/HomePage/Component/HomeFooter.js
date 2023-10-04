import { Component } from "react";
import FooterTop from "./Footer/FooterTop";
import FooterMid from "./Footer/FooterMid";
import FooterUnder from "./Footer/FooterUnder";
import './HomeFooter.scss';
class HomeFooter  extends Component{
    render(){
        return(
            <div className="home-footer-container">
            <FooterTop/>
            <FooterMid/>
            <FooterUnder/>
            </div>
        )
    }
}
export default HomeFooter;
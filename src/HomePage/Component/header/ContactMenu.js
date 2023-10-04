import { Component } from "react";
import './ContactMenu.scss';
class ContactMenu extends Component{
    render(){
        return(
            <div className="contact-container">
                <div className="content-left">
                    <ul>
                        <li><a href="#">nmt102work@gmail.com</a></li>
                        <li>/</li>
                        <li><a href="#">0867646120</a></li>
                    </ul>
                </div>
                <div className="content-right">
                    <ul>
                        <li><a href="#">Đăng ký</a></li>
                        <li>/</li>
                        <li><a href="#">Đăng nhập</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ContactMenu;
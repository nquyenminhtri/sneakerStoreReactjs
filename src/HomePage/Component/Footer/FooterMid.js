import { Component } from "react";
import './FooterMid.scss';
class FooterMid extends Component{
    render(){
        return(
            <div className="footer-mid-container">
                <div className="footer-content-left footer-mid-content">
                    <ul>
                        <li><a><h4>Trải nghiệm VANS store ngay tại nhà</h4></a></li>
                        <li>Hệ thống VANS online</li>
                        <li>Địa chỉ: Hồ Chí Minh</li>
                        <li>Hotline: 0867646120</li>
                    </ul>
                </div>
                <div className="footer-content-mid footer-mid-content">
                <ul>
                        <li><a><h4>Về chúng tôi</h4></a></li>
                        <li>About Us</li>
                        <li>Size chart</li>
                        <li>Hệ thống cửa hàng</li>
                    </ul>
                </div>
                <div className="footer-content-right footer-mid-content">
                <ul>
                        <li><a><h4>Chính sách</h4></a></li>
                        <li>Chính sách thanh toán</li>
                        <li>Chính sách đổi trả</li>
                        <li>Chính sách bảo hành</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default FooterMid;
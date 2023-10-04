import { Component } from "react";
import './FooterTop.scss';
class FooterTop extends Component{
    render(){
        return(
            <div className="footer-top-container">
                <div className="footer-child">
                    <div className="footer-title-desciption">
                        <h3>NHẬP EMAIL</h3>
                        <span>Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi</span>
                    </div>
                    <div className="footer-form">
                        <input className="form-input" />
                        <span className="form-btn"><button>Gửi ngay</button></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterTop;

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.scss';
class Banner extends Component{
    
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
         
        return(
            <div className="banner-container">
              <Slider className="Slider-container" {...settings} >

              <div className="child-slider ">
                <img src="images/slider_1.webp" alt="no image"/>
              </div>
              <div className="child-slider " >
              <img src="images/slider_2.webp" alt="no image"/>
              </div>
              <div className="child-slider">
              <img src="images/slider_3.webp" alt="no image"/>
              </div>
              <div className="child-slider">
              <img src="images/slider_4.webp" alt="no image"/>
              </div>
              <div className="child-slider">
              <img src="images/slider_5.webp" alt="no image"/>
              </div>
              
            </Slider>
            </div>
        )
    }
}
export default Banner;
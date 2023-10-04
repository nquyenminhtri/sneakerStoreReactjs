import { Component } from "react";
import Slider from "react-slick";
import './Product.scss';
import {getAllProducts} from '../../../services/productService';
import {getAllCategory} from '../../../services/productService';


class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            arrProducts:[],
            arrCategory:[],
        }
    }
    async componentDidMount() {
        await this.getAllCategoryFromReact();
        await this.getAllProductFromReact();
    }
    getAllCategoryFromReact= async()=>{
        let response = await getAllCategory('ALL');
        if(response && response.errCode === 0)
        {
            this.setState({
                arrCategory:response.category
            })
        }
    }
    getAllProductFromReact= async()=>{
        let response = await getAllProducts('ALL');
        if(response && response.errCode === 0)
        {
            this.setState({
                arrProducts:response.products
            })
        }
    }
    
    render(){     
        
        let settings = {            
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        let arrProducts = this.state.arrProducts;
        let arrCategory = this.state.arrCategory;
        console.log('check product: ',arrProducts);  
        console.log('check category: ',arrCategory)
            return(
                 arrCategory && arrCategory.map((category,index)=>{
                    return( <div className="product-container" key={index}>                   
                    <div className="product-content">
                       <div className="product-conten-left" style={{backgroundImage: `url(${category.img})`}}>
                           <h2>{category.name}</h2>
                           <p>{category.description}
                           </p>
                           <button>XEM THÊM</button>
                       </div>
                       <div className="product-content-right">
                           <div className="product-child-top">                           
                           <Slider className="slider-product" {...settings} >
                           {arrProducts && arrProducts.filter(product => product.categoryId === category.id).slice(0, 6).map((product, index) => (
                                            <div className="child-product" key={index}>
                                                <img src={product.img} alt="no image" />
                                                <div className="title-container">
                                                    <span>{product.name}</span><br />
                                                    <span className="description">{product.description}</span><br />
                                                    <span className="price">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                                </div>
                                                <button><a >TÙY CHỌN</a></button>
                                            </div>
                                        ))}
                           
                           </Slider>
                           
                           </div>
                           <div className="product-child-bottom">
                           </div>
                       </div>
                   </div>           
               </div>)
                })            
            )       
    }
}
export default Product;
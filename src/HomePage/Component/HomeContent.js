import { Component } from "react";
import Product from "./Content/Product";
import News from "./Content/News";
class HomeContent extends Component{
    render(){
     
        return(
            <>
            <Product/>
            <News/>
            </>
        )
    }
}
export default HomeContent;
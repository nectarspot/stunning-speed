import React from "react"
import {
    OfferWrapper,
    OfferFont,
    OfferIcon,
    OfferLink,
    OfferBanner,
    OfferSpan
  } from "./offer.module.css"
import { MdHighlightOff } from "react-icons/md";
import { Link } from "gatsby";


class Offer extends React.Component{
  constructor(){
    super();
    this.state = {
        toggle:true
    }
}
  render(){
    return (
      <div>
      {
        this.state.toggle ?

        <div className={OfferWrapper}>
        <div className={OfferBanner}>
          <p className={OfferFont}>10% discount on all products <Link className={OfferLink} to="/products/">HELLO 10</Link></p>
          <span className={OfferSpan} onClick={()=>{this.setState({toggle:!this.state.toggle})}}>
          <i className={OfferIcon}><MdHighlightOff size="24px"/></i>
          </span>
          </div>
        </div>  
        : null
                }
      </div>
    )
}
}

export default Offer;

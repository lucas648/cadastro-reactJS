import React,{ Component } from "react";
import image from '../assets/cartao.jpg'

class Header extends Component{

  handleGoHome = ()=>{

  }

  render(){
    return(
      <div className="header">
        <img 
          alt="Sem Parar" 
          title="Sem Parar" 
          className="header__img" 
          src={image}
          onClick={this.handleGoHome}/>
      </div>
    )
  }
}

export default Header;
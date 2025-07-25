import React , {useContext, useState} from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom";
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setlogin }) => {

const [menu , setmenu] = useState("Home")
const{getCartTotal}=useContext(StoreContext);


  return (
    <div className='navbar' id='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setmenu("Home")} className={menu ==="Home"? "active":""}>Home</Link>
        <a href='#explore-menu'  onClick={()=>setmenu("About-us")} className={menu ==="About-us"? "active":""}>About-us</a>
        <a href='#AppDownload'  onClick={()=>setmenu("Mobile-app")} className={menu ==="Mobile-app"? "active":""}>Mobile-app</a>
        <a href='#footer'  onClick={()=>setmenu("Contact-us")} className={menu ==="Contact-us"? "active":""}>Contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
          <div className={getCartTotal()>0?"dot":""}></div>
        </div>
        <button onClick={()=>setlogin(true)} className='btn'>Sign in</button>
      </div>
      
    </div>
  )
}

export default Navbar

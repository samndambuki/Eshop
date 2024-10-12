import React from 'react';
import './Header.css'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header(){
    return(
        <div className='header'>
        {/* logo */}
      <div className="header__logo">
      <ShoppingBagOutlinedIcon className='header__logoImage' fontSize='large'/>
      <h2 className='header__LogoTitle'>eShop</h2>
      </div>
      {/* serach bar */}
      <div className="header__search">
    <input type="text" className="header__searchInput"/>
    <SearchOutlinedIcon className='header__searchIcon'/>
      </div>
      {/* navigation */}
      <div className="header__nav">
        <div className="nav__item">
          <span className="item__itemLineOne">
            Hello Guest
          </span>
          <span className="nav__itemLineTwo">
            Sign In
          </span>
        </div>
        <div className="nav__item">
        <span className="item__itemLineOne">
            Your 
          </span>
          <span className="nav__itemLineTwo">
            Shop
          </span>
        </div>
        <div className="nav__item">
          <ShoppingBasketOutlinedIcon  className='itemBasket'/>
          <span className="nav__itemLineTwo nav__basketCount">
            0
          </span>
        </div>
      </div>
        </div>
    )
}

export default Header
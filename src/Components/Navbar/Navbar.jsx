import React,{useRef, useContext} from 'react';
import { Container } from 'reactstrap';
import logo from '../../images/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import "../Navbar/Navbar.css";
import { foodBasket } from '../../context/FoodBasketProvider';
import { userContext } from '../../context/AuthContextProviders';

const nav__links = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Foods',
      path: '/foods'
    },
    {
      display: 'Cart',
      path: '/basket'
    },
    {
      display: 'Contact',
      path: '/contact'
    }
  ]

const Navbar = () => {
  const {currentUser} = useContext(userContext)
  const { basketCount } = useContext(foodBasket)
    const menuRef = useRef(null);
    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
    return (
      <header className="header">
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>Mika's food</h5>
            </div>
            {/* =========MENU======== */}
            <div className="navigation" ref={menuRef}  onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, ind) => (
                  <NavLink to={item.path} key = {ind} className={navClass => navClass.isActive ? 'active__menu' : ''}>{item.display}</NavLink>
                ))}
  
              </div>
            </div>
  
            {/* ==== Nav right icon==== */}
            <div className="nav__right d-flex align-items-center gap-4">
              
              <span className="cart__icon">
              <Link to='/basket'>
                <i className="ri-shopping-basket-line"></i>
                  <span className="cart__badge">{basketCount}</span>
                  </Link>
              </span>
              {currentUser ?
                <span className="user user__name"><Link to = '/users'>{currentUser.name}</Link></span>
                :<span className="user">
                <Link to= '/auth'>
                  <i className="ri-user-line"></i>
                </Link>
              </span>
              }
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    )
  }
  
  export default Navbar;

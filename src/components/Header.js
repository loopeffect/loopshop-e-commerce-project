import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import SliderArea from './SliderArea'
import Products from "./Products";

function Header() {
    /*CATEGORY LINKS GETTING*/
    const [categorydata,setcategoryData]=useState([]);
    const loadcategoryData=async()=>{
        const response=await axios.get('http://localhost:5000/api/productcategories'); 
        setcategoryData(response.data);
        };
    /*CATEGORY LINKS GETTING END*/
    /*NAVBAR LINKS GETTING*/
    const [navbardata,setnavbarData]=useState([]);
    const loadnavbarData=async()=>{
        const response=await axios.get('http://localhost:5000/api/navbarlinks'); 
        setnavbarData(response.data);
        };
    /*NAVBAR LINKS GETTING END*/
    /*LOADING ALL DATA FROM DB */
        useEffect(()=>{
            loadnavbarData();
            loadcategoryData();
        },[])
  return (
    <div>
<>
  <header className="header shop">
    <div className="middle-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-12">
            {/* Logo */}
            <div className="logo">
              <a href="#">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            {/*/ End Logo */}
            {/* Search Form */}
            <div className="search-top">
              <div className="top-search">
                <a href="#0">
                  <i className="ti-search" />
                </a>
              </div>
              {/* Search Form */}
              <div className="search-top">
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Search here..."
                    name="search"
                  />
                  <button value="search" type="submit">
                    <i className="ti-search" />
                  </button>
                </form>
              </div>
              {/*/ End Search Form */}
            </div>
            {/*/ End Search Form */}
            <div className="mobile-nav" />
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <div className="search-bar-top">
              <div className="search-bar">
                <select>
                  <option selected="selected">All Category</option>
                  <option>watch</option>
                  <option>mobile</option>
                  <option>kid’s item</option>
                </select>
                <form>
                  <input
                    name="search"
                    placeholder="Search Products Here....."
                    type="search"
                  />
                  <button className="btnn">
                    <i className="ti-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <div className="right-bar">
              {/* Search Form */}
              <div className="sinlge-bar">
                <a href="#" className="single-icon">
                  <i className="fa fa-heart-o" aria-hidden="true" />
                </a>
              </div>
              <div className="sinlge-bar">
                <a href="#" className="single-icon">
                  <i className="fa fa-user-circle-o" aria-hidden="true" />
                </a>
              </div>
              <div className="sinlge-bar shopping">
                <a href="#" className="single-icon">
                  <i className="ti-bag" />{" "}
                  <span className="total-count">2</span>
                </a>
                {/* Shopping Item */}
                <div className="shopping-item">
                  <div className="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="#">View Cart</a>
                  </div>
                  <ul className="shopping-list">
                    <li>
                      <a href="#" className="remove" title="Remove this item">
                        <i className="fa fa-remove" />
                      </a>
                      <a className="cart-img" href="#">
                        <img src="https://via.placeholder.com/70x70" alt="#" />
                      </a>
                      <h4>
                        <a href="#">Woman Ring</a>
                      </h4>
                      <p className="quantity">
                        1x - <span className="amount">$99.00</span>
                      </p>
                    </li>
                    <li>
                      <a href="#" className="remove" title="Remove this item">
                        <i className="fa fa-remove" />
                      </a>
                      <a className="cart-img" href="#">
                        <img src="https://via.placeholder.com/70x70" alt="#" />
                      </a>
                      <h4>
                        <a href="#">Woman Necklace</a>
                      </h4>
                      <p className="quantity">
                        1x - <span className="amount">$35.00</span>
                      </p>
                    </li>
                  </ul>
                  <div className="bottom">
                    <div className="total">
                      <span>Total</span>
                      <span className="total-amount">$134.00</span>
                    </div>
                    <a href="checkout.html" className="btn animate">
                      Checkout
                    </a>
                  </div>
                </div>
                {/*/ End Shopping Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header Inner */}
    <div className="header-inner">
      <div className="container">
        <div className="cat-nav-head">
          <div className="row">
            <div className="col-lg-3">
              <div className="all-category">
                <h3 className="cat-heading">
                  <i className="fa fa-bars" aria-hidden="true" />
                  CATEGORIES
                </h3>
                <ul className="main-category">
                  <li>
                    <a href="#">
                      New Arrivals{" "}
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <ul className="sub-category">
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">best selling</a>
                      </li>
                      <li>
                        <a href="#">top 100 offer</a>
                      </li>
                      <li>
                        <a href="#">sunglass</a>
                      </li>
                      <li>
                        <a href="#">watch</a>
                      </li>
                      <li>
                        <a href="#">man’s product</a>
                      </li>
                      <li>
                        <a href="#">ladies</a>
                      </li>
                      <li>
                        <a href="#">westrn dress</a>
                      </li>
                      <li>
                        <a href="#">denim </a>
                      </li>
                    </ul>
                  </li>
                  <li className="main-mega">
                    <a href="#">
                      best selling{" "}
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <ul className="mega-menu">
                      <li className="single-menu">
                        <a href="#" className="title-link">
                          Shop Kid's
                        </a>
                        <div className="image">
                          <img
                            src="https://via.placeholder.com/225x155"
                            alt="#"
                          />
                        </div>
                        <div className="inner-link">
                          <a href="#">Kids Toys</a>
                          <a href="#">Kids Travel Car</a>
                          <a href="#">Kids Color Shape</a>
                          <a href="#">Kids Tent</a>
                        </div>
                      </li>
                      <li className="single-menu">
                        <a href="#" className="title-link">
                          Shop Men's
                        </a>
                        <div className="image">
                          <img
                            src="https://via.placeholder.com/225x155"
                            alt="#"
                          />
                        </div>
                        <div className="inner-link">
                          <a href="#">Watch</a>
                          <a href="#">T-shirt</a>
                          <a href="#">Hoodies</a>
                          <a href="#">Formal Pant</a>
                        </div>
                      </li>
                      <li className="single-menu">
                        <a href="#" className="title-link">
                          Shop Women's
                        </a>
                        <div className="image">
                          <img
                            src="https://via.placeholder.com/225x155"
                            alt="#"
                          />
                        </div>
                        <div className="inner-link">
                          <a href="#">Ladies Shirt</a>
                          <a href="#">Ladies Frog</a>
                          <a href="#">Ladies Sun Glass</a>
                          <a href="#">Ladies Watch</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {
                    categorydata.map((names,i)=>(
                    <li key={names.id}>
                        <a href="#">{names.category}</a>
                    </li>
                    ))
                    }
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="menu-area">
                {/* Main Menu */ /* navbardata */} 
                <nav className="navbar navbar-expand-lg">
                  <div className="navbar-collapse">
                    <div className="nav-inner">
                      <ul className="nav main-menu menu navbar-nav">
                        {
                            navbardata.map((names,i)=>(
                                <div key={names.id}>
                            {names.type==="active" ? (<li className="active"><a href="#">{names.name}</a></li>):<li><a href="#">{names.name}</a></li>}
                            </div>
                            ))
                        }
                        <li>
                          <a href="#">
                            Blog
                            <i className="ti-angle-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-single-sidebar.html">
                                Blog Single Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Shop
                            <i className="ti-angle-down" />
                            <span className="new">New</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="shop-grid.html">Shop Grid</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/*/ End Main Menu */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End Header Inner */}
  </header>
  {/*/ End Header */}
  <SliderArea></SliderArea>
  <Products></Products>
</>
      
    </div>
    
  )
}

export default Header

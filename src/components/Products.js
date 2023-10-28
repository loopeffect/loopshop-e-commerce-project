
import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Products = () => {
    const [categorydata,setcategoryData]=useState([]);
    const loadcategoryData=async()=>{
        const response=await axios.get('http://localhost:5000/api/productcategories'); 
        setcategoryData(response.data);
        };
        useEffect(()=>{
            loadcategoryData();
        },[])
  return (
<>
  {/* Start Product Area */}
  <div className="product-area section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Trending Item</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="product-info">
            <div className="nav-main">
              {/* Tab Nav */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              {
                    categorydata.map((names,i)=>(
                        <li className="nav-item" key={names.id}>
                        <a
                          className="nav-link "
                          data-toggle="tab"
                          href={"#"+names.category}
                          role="tab"
                        >
                          {names.category}
                        </a>
                      </li>
                    ))
                    } 
                
                
              </ul>
              {/*/ End Tab Nav */}
            </div>
            <div className="tab-content" id="myTabContent">
              {/* Start Single Tab */}
              {
                    categorydata.map((names,i)=>(
                        <div
                className="tab-pane fade show active"
                id={names.category}
                role="tabpanel"
              >
                <div className="tab-single">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                      <div className="single-product">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img
                              className="default-img"
                              src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww"
                              alt="#"
                            />
                            <img
                              className="hover-img"
                              src="https://via.placeholder.com/550x750"
                              alt="#"
                            />
                          </a>
                          <div className="button-head">
                            <div className="product-action">
                              <a
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Quick View"
                                href="#"
                              >
                                <i className=" ti-eye" />
                                <span>Quick Shop</span>
                              </a>
                              <a title="Wishlist" href="#">
                                <i className=" ti-heart " />
                                <span>Add to Wishlist</span>
                              </a>
                              <a title="Compare" href="#">
                                <i className="ti-bar-chart-alt" />
                                <span>Add to Compare</span>
                              </a>
                            </div>
                            <div className="product-action-2">
                              <a title="Add to cart" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3>
                            <a href="product-details.html">
                            {names.category}
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$29.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              
                    ))
                    } 
              
              {/* END Single Tab */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Product Area */}
</>
  
  )
}

export default Products

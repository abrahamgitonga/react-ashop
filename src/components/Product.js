import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
class Product extends Component {
  state = {};
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              console.log("you clicked me on image container");
            }}
          >
            <Link to="/details">
              <img src={img} alt="Product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus">Add</i>
              )}
            </button>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;

export default Product;

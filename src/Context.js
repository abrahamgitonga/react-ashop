import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

//provider
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetails = () => {
    console.log("hello from details");
  };
  addToCart = () => {
    console.log("hello from cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

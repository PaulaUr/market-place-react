import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from '../../redux/ActionCreators';

import Products from "../products/Products.component";

class Main extends Component {

  componentDidMount() {
      this.props.fetchProducts();
  }

  render() {
    const { products, isLoading, errMess} = this.props.products;
    return (
      <React.Fragment><Products products={products} isLoading={isLoading} errMess={errMess} /></React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

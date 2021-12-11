import React from "react";
import { CardList } from "../card-list/Card-list.component";
import { Loading } from '../loading/Loading.component';
import {ErrorMessage} from '../error-message/Error-message.component';
import './Products.styles.scss';

const Products = ({ products, isLoading, errMess }) => {



  if (isLoading) {
    return (
      <div className="product-container">
      <div className="product-row">
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="product-container">
        <div className="product-row">
        <ErrorMessage errMess={errMess}/>
      </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <CardList products={products} />
    </React.Fragment>
  );
};

export default Products;

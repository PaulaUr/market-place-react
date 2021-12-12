import React from "react";
import { CardList } from "../card-list/Card-list.component";
import { Loading } from '../loading/Loading.component';
import {ErrorMessage} from '../error-message/Error-message.component';
import './Products.styles.scss';

function HandleDatatoAddNewProp(products) {
  products.forEach(product => {
    const { on_sale, stock } = product;
    const isInStock = stock && stock !== 0;
    product["applyOnSale"] = on_sale && isInStock ? true : false;
  });

}

const Products = ({ products, isLoading, errMess }) => {

  products.sort((a) => (a.stock === 0) ? 1 : -1);
  HandleDatatoAddNewProp(products);

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
    <div className="container">
      <CardList products={products} />
    </div>
  );
};

export default Products;

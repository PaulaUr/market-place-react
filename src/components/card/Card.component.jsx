import React from "react";
import CardTitle  from './card-title/Card-title.component';
import CardDescription from './card-description/Card-description.component';
import {
  CardImgStyle,
  CardBodyStyle
} from "./Card-styles";


function Card({ itemData }) {
  const { imageUrl, name, price, on_sale_price, stock, applyOnSale } = itemData;


  return (
    <React.Fragment>
      <CardImgStyle stock={stock}>
        <img alt="robots" src={imageUrl} height="200px" />
      </CardImgStyle>
      <CardBodyStyle>
        <CardTitle  applyOnSale={applyOnSale} name={name}/>
        <CardDescription applyOnSale={applyOnSale} onSalePrice={on_sale_price} price={price} />
      </CardBodyStyle>
    </React.Fragment>
  );
}

export default Card;

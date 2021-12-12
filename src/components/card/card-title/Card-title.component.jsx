import React from "react";
import { CardTitleStyle, CardTitleOnSaleStyle } from './Card-title-styles';

function CardTitle({ applyOnSale, name }) {
  return applyOnSale ? (
    <CardTitleOnSaleStyle applyOnSale={applyOnSale}>{name}</CardTitleOnSaleStyle>
  ) : (
    <CardTitleStyle>{name}</CardTitleStyle>
  );
}

export default CardTitle;

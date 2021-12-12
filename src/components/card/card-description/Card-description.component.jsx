import React from "react";
import {
  CardDescriptionContainer,
  CardDescriptionStyle,
  CardDescriptionOldStyle,
  CardDescriptionOnSaleStyle,
} from "./Card-description-styles";

function CardDescription({ applyOnSale, onSalePrice, price }) {
    const euroSymbol = '€';
  return applyOnSale ? (
    <CardDescriptionContainer>
      <CardDescriptionOldStyle>{price}{euroSymbol}</CardDescriptionOldStyle>
      <CardDescriptionOnSaleStyle>{onSalePrice}{euroSymbol}</CardDescriptionOnSaleStyle>
    </CardDescriptionContainer>
  ) : (
    <CardDescriptionStyle>{price}{euroSymbol}</CardDescriptionStyle>
  );
}

export default CardDescription;

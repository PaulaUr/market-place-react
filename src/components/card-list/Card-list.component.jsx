import React from 'react';
import {CardListContainerStyle, CardListItemStyle} from './Card-list-styles';
import Card from '../card/Card.component';

export const CardList = ({products}) => {
    const dataList = products.map((item) => {
    const { applyOnSale } = item;
      if (item) {
        return (
          <CardListItemStyle key={item.id.toString()} applyOnSale={applyOnSale}>
              <Card itemData={item}/>
          </CardListItemStyle>
        )
      }
    });

    return (
    <CardListContainerStyle>
        {dataList}
    </CardListContainerStyle>
    );
  };